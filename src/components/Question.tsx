"use client";

import SplitText from "@/util/SplitText";

interface QuestionProps {
  label: string;
}
export default function Question({ label }: QuestionProps) {
  return (
    <div className="text-center text-[2.8rem] text-bold mt-[3.4rem]">
      {SplitText(label)}
    </div>
  );
}
