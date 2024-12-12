"use client";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import Lottie from "react-lottie";

import animationData from "../../public/Gb5BVXSvE8.json";

import { TopBar } from "@/components/top-bar";

export default function MixingPage() {
  const router = useRouter();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <TopBar
        BarIcon={<IoMdArrowRoundBack size={30} onClick={() => router.back()} />}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="font-arcane" style={{ fontSize: 32 }}>
          Now Mixing...
        </h1>
        <div style={{ marginTop: 120 }}>
          <Lottie height={400} options={defaultOptions} width={400} />
        </div>
      </div>
    </div>
  );
}
