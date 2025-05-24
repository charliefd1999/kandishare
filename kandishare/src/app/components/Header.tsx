"use client";

import React, { useMemo } from "react";
import { getRandomizedColors } from "../utils/utils";

export default function Header() {
  const randomizedColors = useMemo(() => getRandomizedColors(), []);

  return (
    <div className="fixed top-0 left-0 w-full h-[10vh] flex bg-[#0A0A0A]">
      <h1 className="text-white text-3xl px-8 py-6 ">
        {"kandishare".split("").map((char, i) => (
          <span
            key={i}
            className={randomizedColors[i % randomizedColors.length]}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}
