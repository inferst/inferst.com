"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const emptySubscribe = () => () => {};

const ThemeChanger = () => {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { resolvedTheme, setTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      {resolvedTheme == "dark" && (
        <button
          className="cursor-pointer hover:font-bold"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setTheme("light")}
        >
          <Sun strokeWidth={isHovered ? 3 : 2} />
        </button>
      )}
      {resolvedTheme == "light" && (
        <button
          className="cursor-pointer hover:font-bold"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setTheme("dark")}
        >
          <Moon strokeWidth={isHovered ? 3 : 2} />
        </button>
      )}
    </>
  );
};

export default ThemeChanger;
