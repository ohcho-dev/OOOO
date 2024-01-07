"use client";

import { AnswerUser1State, formStepState } from "@/store/atom";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useRecoilState, useSetRecoilState } from "recoil";
interface ToolbarProps {
  title: string;
}
export default function Toolbar({ title }: ToolbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [formStep, setFormStep] = useRecoilState(formStepState);
  const setAnswerUser1 = useSetRecoilState(AnswerUser1State);

  const handleBackButton = () => {
    if (formStep > 0 && pathname.indexOf("first") !== -1) {
      setFormStep(formStep - 1);
    } else if (pathname.indexOf("first") === -1) {
      history.back();
    } else {
      if (!window.confirm("선택한 정보가 모두 지워집니다.\n 뒤로가시겠습니까?"))
        return;
      setFormStep(0);
      setAnswerUser1([]);
      router.back();
    }
  };

  const handleCloseButton = () => {
    if (
      !window.confirm(
        "선택한 정보가 모두 지워집니다.\n 처음으로 돌아가시겠습니까?"
      )
    )
      return;
    setFormStep(0);
    setAnswerUser1([]);
    router.push("/");
  };
  return (
    <header
      className={`w-full flex justify-between p-4 absolute top-0 left-0 z-50 ${
        pathname.indexOf("first") === -1 ? "bg-white" : ""
      }`}
    >
      <div onClick={handleBackButton} className="px-[1.8rem] py-[1.6rem]">
        <Image
          src="/back.png"
          alt="뒤로가기"
          width={27}
          height={15}
          className="w-[2.7rem] h-[1.5rem]"
        />
      </div>
      <h1 className="flex items-center text-[2.1rem]">{title}</h1>

      <div className="w-[2.4rem]"></div>
    </header>
  );
}
