"use client";
import { IoMdCog } from "react-icons/io";

export const SettingsCog = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 30,
        right: 30,
        zIndex: 100,
      }}
    >
      <IoMdCog size={70} />
    </div>
  );
};
