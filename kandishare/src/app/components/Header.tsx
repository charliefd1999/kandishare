"use client";

import React, { useEffect, useMemo, useState } from "react";
import { getRandomizedColors } from "../utils/utils";

export default function Header() {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const randomizedColors = useMemo(() => getRandomizedColors(), []);

  if (!hasHydrated) return null;

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
