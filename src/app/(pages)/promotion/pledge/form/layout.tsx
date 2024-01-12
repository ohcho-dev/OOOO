import Toolbar from "@/components/toolbar";
import { Metadata } from "next";

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-[99dvh]">
      <div>
        <Toolbar title="" />
        {children}
      </div>
    </div>
  );
}
