import Toolbar from "@/components/toolbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Instantgram",
    template: "Instantgram | %s",
  },
  description: "Instantgram Photos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-[99svh]">
      <div>
        <Toolbar title="" />
        {children}
      </div>
    </div>
  );
}
