"use client";
import BottomButton from "@/components/BottomButton";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { AnswerUser1State, AnswerUser2State } from "@/store/atom";
import { useEffect, useState } from "react";
import AnimationLogo from "@/components/AnimationLogo";
import DecompressedString from "@/util/decompressedString";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const searchParams = window.location.search.substring(1);
  const [status, setStatus] = useState<boolean>(false);
  const [answerUser1, setAnswerUser1] = useRecoilState(AnswerUser1State);
  const [answerUser2, setAnswerUser2] = useRecoilState(AnswerUser2State);

  console.log(answerUser1, answerUser2);

  useEffect(() => {
    if (searchParams) {
      const data = DecompressedString(searchParams);
      setAnswerUser1(data);

      const timer = setTimeout(() => {
        setStatus((prevStatus) => !prevStatus);
      }, 2600);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <section className="w-full absolute left-[0] top-[9.4rem]">
      {!status && (
        <div className="h-[70svh]">
          <AnimationLogo />
        </div>
      )}
      {status && (
        <>
          <div className="w-[16.2rem] h-[5.6rem] mx-auto">
            <Image src="/logo.png" alt="육아응원" width={162} height={56} />
          </div>
          <h1 className="text-[2.6rem] text-center animate-[pledge1_3s_ease-in-out] mt-[5.3rem]">
            서약서 작성이 완료되었습니다.
            <br />
            완성된 서약서를 전송해드리겠습니다.
          </h1>

          <div className="mt-[9.3rem] w-[34.8rem] h-[34.8remrem] mx-auto">
            <Image src="/result_bg.png" alt="bg" width={348} height={348} />
          </div>

          <BottomButton
            label="서약서 확인하기"
            onClick={() => {
              router.push(`/promotion/pledge/form2?${searchParams}`);
            }}
            status={true}
          />
        </>
      )}
    </section>
  );
}
