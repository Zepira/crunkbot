"use client";
import { Card, CardBody } from "@nextui-org/react";

import { title } from "@/components/primitives";

const dummConfig = [{slotNo:1, ingredientName: "Gin"}]
export default function ConfigurationPage() {
  return (
    <div style={{ width: "100%" }}>
      <h1 className={title()}>Configuration</h1>
      <div style={{ marginTop: 50, width: "100%" }}>
        <Card style={{ width: "100%" }}>
          <CardBody>Slot 1</CardBody>
        </Card>
      </div>
    </div>
  );
}
