"use client";
import { AnswerUser1 } from "@/model/survey";
import Image from "next/image";
import { ChangeEvent } from "react";

interface SubjectFormProps {
  question: string;
  value?: string;
  useResetButton: boolean;
  mixData: AnswerUser1;
  handleMixData: (subject_value: string) => void;
}
export default function SubjectForm({
  question,
  value = "홍길동",
  useResetButton = true,
  mixData,
  handleMixData,
}: SubjectFormProps) {
  return (
    <section className="mx-[3.7rem] mt-[8rem] relative">
      <div className="text-[2.4rem]">{question}</div>
      <input
        className="w-full border-b-[0.1rem] border-black h-[6rem] mt-[1.5rem] text-[3.5rem]"
        type="text"
        value={mixData.subject_value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleMixData(e.target.value);
        }}
      />
      {useResetButton && (
        <div className="absolute bottom-[2rem] right-0" onClick={() => {}}>
          <Image src="/reset.png" alt="초기화" width={20} height={20} />
        </div>
      )}
    </section>
  );
}
