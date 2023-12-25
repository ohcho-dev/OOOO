"use client";
import BottomButton from "@/components/BottomButton";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PledgeMainPage() {
  const router = useRouter();
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus((prevStatus) => !prevStatus);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full absolute left-[0] top-[9.4rem]">
      <h1 className="text-[2.6rem] text-center">
        나의 든든한 버팀목인 배우자와 함께
        <br />
        만드는 공동 육아 서약서
      </h1>
      <div className="flex animate-[pledge1_6s_ease-in-out]">
        <div className="w-full h-[6rem] border-r-[0.1rem] border-black my-[3rem]"></div>
        <div className="w-full"></div>
      </div>
      <h2 className="text-[2.1rem] text-center mb-[5.4rem] animate-[pledge2_6s_ease-in-out]">
        사랑하는 배우자의 모습을 생각하며
        <br />
        터치만으로 간단한 서약서를
      </h2>
      <h2 className="text-[2.1rem] text-center mb-[7rem] animate-[pledge3_6s_ease-in-out]">
        아이의 말투를 빌려서
        <br />
        함께 지켜나갈 서약서를 만듭니다.
      </h2>
      <h2 className="text-[2.1rem] text-center leading-[3.6rem] animate-[pledge4_6s_ease-in-out]">
        하나의 추억이 될 육아 서약서를
        <br />
        배우자와 함께 만들어보세요.
        <div className="text-[1.4rem]">
          ※ 선택과정에서 발생한 문제는 책임지지 않습니다.
        </div>
      </h2>

      <BottomButton
        label="이벤트 참여하기"
        onClick={() => {
          router.push("/promotion/pledge/form");
        }}
        status={status}
      />
    </section>
  );
}
