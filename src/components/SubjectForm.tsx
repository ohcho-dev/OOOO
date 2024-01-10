"use client";
import { AnswerUser1 } from "@/model/survey";
import Image from "next/image";
import { ChangeEvent } from "react";

interface SubjectFormProps {
  question: string;
  value?: string;
  useResetButton: boolean;
  mixData: AnswerUser1;
  handleMixData: (sv: string) => void;
}
export default function SubjectForm({
  question,
  value = "홍길동",
  useResetButton = true,
  mixData,
  handleMixData,
}: SubjectFormProps) {
  return (
    <section className="mx-[3.7rem] mt-[6rem] relative">
      <div className="text-[2.4rem]">{question}</div>
      <input
        className="w-full border-b-[0.1rem] border-black h-[6rem] mt-[1.5rem] text-[3.5rem]"
        placeholder={
          question === "아이의 별명(또는 이름)을 입력해주세요."
            ? "예 : 희망이, 소울이, 황금이"
            : ""
        }
        type="text"
        value={mixData.sv}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleMixData(e.target.value);
        }}
      />
      <div className="mt-[1.8rem] text-[1.8rem]">
        * 최대 6자까지 입력할 수 있어요.
        <br />* 한글만 작성 가능합니다.
      </div>
      {useResetButton && (
        <div
          className="absolute top-[7rem] right-[1rem]"
          onClick={() => handleMixData("")}
        >
          <Image src="/reset.webp" alt="초기화" width={20} height={20} />
        </div>
      )}
    </section>
  );
}
