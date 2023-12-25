interface GridLayoutProps {
  grid: number;
  children: React.ReactNode;
}
export default function GridLayout({ grid, children }: GridLayoutProps) {
  const grid1 = "grid-cols-1";
  const grid2 = "grid-cols-2";

  return (
    <section
      className={`mt-[5.4rem] px-[6rem] gap-[2rem] grid ${
        grid === 1 ? grid1 : grid2
      }`}
    >
      {children}
    </section>
  );
}
