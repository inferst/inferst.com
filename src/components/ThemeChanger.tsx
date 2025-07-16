"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (!mounted) {
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
