"use client";

import Link from "next/link";
import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";

const width = 235;
const height = 225;

const eyesMap: Map<[number, number], number> = new Map([
  [[3.5, 4], 1],
  [[2.5, 3.5], 9],
  [[1.5, 2.5], 7],
  [[0.5, 1.5], 15],
  [[-0.5, 0.5], 5],
  [[-1.5, -0.5], 13],
  [[-2.5, -1.5], 3],
  [[-3.5, -2.5], 11],
  [[-4, -3.5], 1],
]);

const Face = () => {
  const ref = useRef<HTMLImageElement | null>(null);
  const [frame, setFrame] = useState(0);

  const onMouseMove = useCallback((event: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();

    if (rect) {
      const position = {
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height / 2,
      };

      const angle =
        (Math.atan2(position.y - event.pageY, position.x - event.pageX) /
          Math.PI) *
        180;

      const distance = Math.sqrt(
        Math.pow(position.y - event.pageY, 2) +
          Math.pow(position.x - event.pageX, 2),
      );

      if (distance > 100) {
        for (const [range, frame] of eyesMap) {
          const angleIndex = (angle / 180) * 4;

          if (angleIndex > range[0] && angleIndex < range[1]) {
            setFrame(Number(frame));
          }
        }
      } else {
        setFrame(0);
      }
    }
  }, []);

  const handleMouseDown = () => {
    setFrame(17);
  };

  const handleMouseUp = () => {
    setFrame(0);
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div className="relative">
        <img
          ref={ref}
          aria-hidden
          src="/face.png"
          alt="Face"
          width={width}
          height={height}
          className="rounded-xl subpixel-antialiased"
          style={{ imageRendering: "pixelated" } as CSSProperties}
        />
        <a
          href="/"
          className={`cursor-pointer block absolute top-0 left-0`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div
            className={`w-[var(--width)] h-[var(--height)] block`}
            style={
              {
                "--width": `${width}px`,
                "--height": `${height}px`,
                backgroundImage: "url(/eyes.png)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: `0 -${frame * height}px`,
                imageRendering: "pixelated",
              } as CSSProperties
            }
          ></div>
        </a>
      </div>
    </div>
  );
};

export default Face;
