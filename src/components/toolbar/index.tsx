"use client";

import { AnswerUser1State, formStepState } from "@/store/atom";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

import { useRecoilState, useSetRecoilState } from "recoil";

export default function Toolbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [formStep, setFormStep] = useRecoilState(formStepState);
  const setAnswerUser1 = useSetRecoilState(AnswerUser1State);

  const handleBackButton = () => {
    if (formStep > 0) {
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
      className={`w-full flex justify-between p-4 absolute top-0 left-0 z-10 ${
        pathname.indexOf("first") === -1 ? "bg-white" : ""
      }`}
    >
      <div onClick={handleBackButton} className="px-[1.8rem] py-[1.6rem]">
        <Image src="/back.png" alt="뒤로가기" width={27} height={15} />
      </div>
      <h1>
        <Image src="/logo.png" alt="육아응원" width={81} height={28} />
      </h1>
      <div onClick={handleCloseButton}>
        <div className="text-[2.4rem] px-[1.8rem] pb-[1rem]">x</div>
      </div>
    </header>
  );
}
