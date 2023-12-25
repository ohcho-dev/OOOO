"use client";
import { useEffect, useRef, useState } from "react";

interface GridLayoutProps {
  grid: number;
  height: number | null;
  children: React.ReactNode;
}
export default function GridLayout({
  grid,
  height,
  children,
}: GridLayoutProps) {
  const heightRef = useRef<HTMLDivElement | null>(null);
  const [scroll, setScroll] = useState(false);
  const grid1 = "grid-cols-1";
  const grid2 = "grid-cols-2";

  console.log(heightRef.current?.scrollHeight, height);
  useEffect(() => {
    if (heightRef.current?.scrollHeight && height) {
      heightRef.current.scrollHeight > (height * 4) / 7
        ? setScroll(true)
        : setScroll(false);
    }
  }, [heightRef, height]);

  return (
    <>
      <section
        ref={heightRef}
        className={`border-b-slate-200 relative max-h-calc overflow-scroll mt-[5.4rem] mb-[6rem] px-[6rem] gap-[2rem] grid ${
          grid === 1 ? grid1 : grid2
        }`}
      >
        {children}
      </section>

      {scroll && (
        <div className="relative left-[88vw] bottom-[8rem] text-[3rem] animate-[moveTopDown_1s_infinite]">
          ↕️
        </div>
      )}
    </>
  );
}
