import Image from "next/image";

import { title } from "@/components/primitives";
import { dummyData } from "@/app/dummyData";
import { Drink } from "@/app/types";

export default async function DrinkPage({
  params,
}: {
  params: Promise<{ drinkId: string }>;
}) {
  const drinkId = (await params).drinkId;

  const drink: Drink | undefined = dummyData.drinks.find(
    (d) => d.idDrink === drinkId
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
      {drinkId && (
        <>
          {drink?.strDrinkThumb && (
            <Image
              alt={`A picture of a ${drink.strDrink}`}
              height={400}
              src={drink?.strDrinkThumb}
              width={400}
            />
          )}
          <h1 className={title()}>{drink?.strDrink}</h1>
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
        </>
      )}
    </div>
  );
}
