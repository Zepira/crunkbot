"use client";
import Image from "next/image";
import { ReactNode } from "react";

export const TopBar = ({ BarIcon }: { BarIcon: ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 15,
        marginBottom: 20,
      }}
    >
      <Image
        alt=""
        height={48}
        src="/Top decoration.png"
        style={{ marginTop: 30, borderRadius: 0, marginBottom: -20 }}
        width={77}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Image alt="" height={75} src="/Radial button.png" width={75} />
        <div style={{ marginTop: -51, marginLeft: 23 }}> {BarIcon}</div>
      </div>
      <Image
        alt=""
        height={48}
        src="/Top decoration.png"
        style={{
          marginBottom: -20,
          transform: "scaleX(-1)",
          marginTop: 30,
          borderRadius: 0,
        }}
        width={77}
      />
    </div>
  );
};
