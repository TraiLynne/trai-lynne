"use client";

import { useEffect, useState } from "react";

export function useCoverScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const isCompactLandscape =
        window.innerHeight < 500 &&
        window.innerWidth > window.innerHeight;

      setScale(isCompactLandscape ? 0.85 : 1);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return scale;
}