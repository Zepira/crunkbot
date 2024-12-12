"use client";
import { Card, CardBody, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { IoFilter } from "react-icons/io5";

import { dummyData } from "./dummyData";

import { TopBar } from "@/components/top-bar";
import { SettingsCog } from "@/components/settings-cog";

export default function Home() {
  const router = useRouter();
  //fetch data and cache it = https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#reusing-data-across-multiple-functions

  return (
    <div style={{ height: "100%", overflow: "hidden", paddingTop: 30 }}>
      <TopBar BarIcon={<IoFilter size={30} />} />
      <div
        className="font-arcane"
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 20,
          marginBottom: 20,
          marginTop: 10,
        }}
      >
        Pick your poison...
      </div>
      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          overflow: "auto",
          height: "82%",
        }}
      >
        <div />
        {dummyData.drinks.map((drink) => (
          <Card
            key={drink.idDrink}
            isFooterBlurred
            isPressable
            radius="lg"
            style={{ maxWidth: "40%", zIndex: 20 }}
            onPress={() => router.push(`/drink/${drink.idDrink}`)}
          >
            <CardBody className="p-0">
              <Image className="object-cover" src={drink.strDrinkThumb} />
              <span>{drink.strDrink}</span>
            </CardBody>
          </Card>
        ))}
      </div>
      <div
        style={{
          height: 130,
          position: "sticky",

          zIndex: "100 !important",
          backgroundImage:
            "linear-gradient(transparent ,rgba(0,0,0,0.5), black, black)",
          marginTop: -90,
        }}
      />
      <SettingsCog />
    </div>
  );
}
