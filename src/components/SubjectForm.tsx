"use client";
import Image from "next/image";

interface SubjectFormProps {
  question: string;
  value?: string;
  useResetButton: boolean;
}
export default function SubjectForm({
  question,
  value = "홍길동",
  useResetButton = true,
}: SubjectFormProps) {
  return (
    <section className="mx-[3.7rem] mt-[8rem] relative">
      <div className="text-[2.4rem]">{question}</div>
      <input
        className="w-full border-b-[0.1rem] border-black h-[6rem] mt-[1.5rem] text-[3.5rem]"
        type="text"
        value={value}
      />
      {useResetButton && (
        <div className="absolute bottom-[2rem] right-0" onClick={() => {}}>
          <Image src="/reset.png" alt="초기화" width={20} height={20} />
        </div>
      )}
    </section>
  );
}
