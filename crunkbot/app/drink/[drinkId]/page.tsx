"use client";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useParams, useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

import { dummyData } from "@/app/dummyData";
import { Drink } from "@/app/types";
import { TopBar } from "@/components/top-bar";

export default function DrinkPage() {
  const router = useRouter();

  const params = useParams<{ drinkId: string }>();

  const drink: Drink | undefined = dummyData.drinks.find(
    (d) => d.idDrink === params.drinkId
  );
  let ingredientList = [];

  if (drink) {
    for (let i = 1; i < 16; i++) {
      const ingredient = drink[`strIngredient${i}` as keyof Drink];
      const measure = drink[`strMeasure${i}` as keyof Drink];
      let convertedOz;

      if (ingredient && measure) {
        if (measure.includes("oz")) {
          const splitMeasure = measure.split(" ");
          let whole = 0;
          let fraction = 0;

          //console.log(ingredient, measure);
          for (let j = 0; j < splitMeasure.length; j++) {
            const part = splitMeasure[j];

            if (part.includes("/")) {
              fraction = convertFractionToDecimal(part);
            } else if (!part.includes("oz") && part !== "") {
              whole = parseInt(part);
              // } else {
              //   oz += 1;
            }

            //console.log(part, whole, fraction);
          }

          convertedOz = `${Math.round(((whole + fraction) * 29.5735) / 5) * 5} mL`;
        }

        //console.log(ingredient, measure);

        ingredientList.push({
          ingredient,
          measure: convertedOz || measure,
        });
      }
    }
  }
  function convertFractionToDecimal(fraction: string) {
    const parts = fraction.split("/");

    return parseInt(parts[0]) / parseInt(parts[1]);
  }

  return (
    <div>
      <TopBar
        BarIcon={<IoMdArrowRoundBack size={30} onClick={() => router.back()} />}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          width: "100%",
          overflow: "auto",
          height: "82%",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {drink && (
          <>
            <h1
              className="font-arcane"
              style={{ fontSize: 32, marginTop: 30, marginBottom: 20 }}
            >
              {drink?.strDrink}
            </h1>
            {drink?.strDrinkThumb && (
              <Image
                alt={`A picture of a ${drink.strDrink}`}
                height={300}
                src={drink?.strDrinkThumb}
                width={300}
              />
            )}
            <h2 className="font-arcane" style={{ fontSize: 20, marginTop: 20 }}>
              Ingredients:
            </h2>
            {ingredientList.length > 0 &&
              ingredientList.map((ingredient, index) => (
                <div key={index}>
                  <span>{ingredient.ingredient} </span>
                  <span>{ingredient.measure}</span>
                </div>
              ))}
            <div style={{ marginTop: 20 }}>
              <span>{drink?.strInstructions}</span>
            </div>
            <div style={{ marginTop: 20 }}>
              <Button onPress={() => router.replace("/mixing")}>
                Order Drink
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
