"use client";
import { Card, CardBody, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { dummyData } from "./dummyData";

export default function Home() {
  const router = useRouter();
  //fetch data and cache it = https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#reusing-data-across-multiple-functions

  return (
    <section className="grid grid-cols-2 gap-4 content-center">
      {dummyData.drinks.map((drink) => (
        <Card
          key={drink.idDrink}
          isFooterBlurred
          isPressable
          radius="lg"
          onPress={() => router.push(`/drink/${drink.idDrink}`)}
        >
          <CardBody className="p-0">
            <Image className="object-cover" src={drink.strDrinkThumb} />
            <span>{drink.strDrink}</span>
          </CardBody>
        </Card>
      ))}
    </section>
  );
}
