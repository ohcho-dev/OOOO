"use client";

import {
  AnswerUser1State,
  AnswerUser2State,
  formStepState,
  infoStepState,
} from "@/store/atom";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useRecoilState, useSetRecoilState } from "recoil";

interface InfoToolbarProps {
  title: string;
}
export default function InfoToolbar({ title }: InfoToolbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [infoStep, setInfoStep] = useRecoilState(infoStepState);
  const [formStep, setFormStep] = useRecoilState(formStepState);
  const setAnswerUser1 = useSetRecoilState(AnswerUser1State);
  const setAnswerUser2 = useSetRecoilState(AnswerUser2State);

  const [searchParams, setSearchParams] = useState("");
  useEffect(() => {
    setSearchParams(window.location.search.substring(1));
  }, []);

  const handleBackButton = () => {
    if (infoStep > 0) {
      setInfoStep(infoStep - 1);
    } else if (searchParams) {
      if (
        !window.confirm(
          "확인을 누를 경우 처음부터 다시 진행해야 합니다.\n처음으로 돌아가시겠습니까?"
        )
      )
        return;
      router.push(`/promotion/pledge/form2/first?${searchParams}`);
    } else if (pathname.indexOf("check") !== -1) {
      if (
        !window.confirm(
          "확인을 누를 경우 처음부터 다시 진행해야 합니다.\n처음으로 돌아가시겠습니까?"
        )
      )
        return;
      router.push("/promotion/pledge/form/first");
    } else {
      setFormStep(0);
      router.back();
    }
  };

  const handleCloseButton = () => {
    if (title === "최종 확인") {
      if (!window.confirm("선택한 정보가 모두 지워집니다.\n 뒤로가시겠습니까?"))
        return;
      setFormStep(0);
      setAnswerUser1([]);
      setAnswerUser2([]);
      router.push("/");
    }
    router.push("/");
  };

  return (
    <header
      className={`w-full flex justify-between p-4 absolute top-0 left-0 z-50 bg-white`}
    >
      <div onClick={handleBackButton} className="px-[1.8rem] py-[1.6rem]">
        <Image
          src="/back.webp"
          alt="뒤로가기"
          width={27}
          height={15}
          className="w-[2.7rem] h-[1.5rem]"
        />
      </div>
      <h1 className="text-[2.1rem] flex items-center font-bold">{title}</h1>

      <div className="w-[6.3rem]"></div>
    </header>
  );
}
