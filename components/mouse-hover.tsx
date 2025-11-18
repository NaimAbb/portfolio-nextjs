"use client";

import { useState, useEffect } from "react";

export default function MouseHover() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
      }}
      className="w-10 h-10 rounded-full bg-red-500 fixed pointer-events-none top-0 left-0 z-[10000]"
    />
  );
}
