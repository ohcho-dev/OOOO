"use client";
import { useEffect, useRef, useState } from "react";

interface GridLayoutProps {
  grid: number;
  width: number | null;
  height: number | null;
  children: React.ReactNode;
}
export default function GridLayout({
  grid,
  width,
  height,
  children,
}: GridLayoutProps) {
  const heightRef = useRef<HTMLDivElement | null>(null);
  const [scroll, setScroll] = useState(false);
  const grid1 = "grid-cols-1";
  const grid2 = "grid-cols-2";

  useEffect(() => {
    if (heightRef.current?.scrollHeight && height) {
      heightRef.current.scrollHeight > (height * 6) / 11
        ? setScroll(true)
        : setScroll(false);
    }
  }, [heightRef, height]);

  return (
    <>
      <section
        ref={heightRef}
        className={`border-b-slate-200 relative max-h-calc overflow-auto scroll-m-0 mt-[5.4rem] mb-[6rem] px-[6rem] gap-[2rem] grid ${
          grid === 1 ? grid1 : grid2
        }`}
      >
        {children}
      </section>

      {width && width < 521 && scroll && (
        <div className="relative left-[88vw] bottom-[8rem] text-[3rem] animate-[moveTopDown_1s_infinite]">
          ↕️
        </div>
      )}
    </>
  );
}