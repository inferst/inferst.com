"use client";

import { cn } from "@/lib/utils";
import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const randWidth = 400;
const randHeight = 400;

const Report = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  const moveReportButton = (currentX: number, currentY: number) => {
    if (ref.current) {
      const buttonRect = ref.current.getBoundingClientRect();

      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = document.documentElement.clientHeight;

      const randX =
        Math.random() * (viewportWidth - buttonRect.width) + window.scrollX;
      const randY =
        Math.random() * (viewportHeight - buttonRect.height) + window.scrollY;

      setIsClicked(true);
      setPosition({ x: Math.round(randX), y: Math.round(randY) });
    }
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    moveReportButton(
      event.changedTouches[0].clientX,
      event.changedTouches[0].clientY,
    );
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    moveReportButton(event.pageX, event.pageY);
  };

  useLayoutEffect(() => {
    if (ref.current) {
      const buttonRect = ref.current.getBoundingClientRect();
      setPosition({
        x: buttonRect.x + window.scrollX,
        y: buttonRect.y + window.scrollY,
      });
    }
  }, []);

  return (
    <motion.button
      ref={ref}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      animate={{ left: `${position.x}px`, top: `${position.y}px` }}
      transition={{ duration: 0.1 }}
      className={cn("underline cursor-pointer", isClicked && "absolute")}
    >
      report
    </motion.button>
  );
};

export default Report;
