"use client";
import AnimationLogo from "@/components/AnimationLogo";
import BottomButton from "@/components/BottomButton";
import CustomBottomModal from "@/components/CustomBottomModal";
import PledgeCard from "@/components/PledgeCard";
import PledgeCardMain from "@/components/PledgeCardMain";
import Letter from "@/components/ui/Lottie/Letter";
import { AnswerUser1State } from "@/store/atom";
import DecompressedString from "@/util/decompressedString";
import { getDate } from "@/util/getDateTime";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

export default function PledgeMainPage() {
  const router = useRouter();
  const [status, setStatus] = useState<boolean>(false);
  const [card, setCard] = useState(false);
  const setAnswerUser1 = useSetRecoilState(AnswerUser1State);
  const [searchParams, setSearchParams] = useState("");
  const [toggle, setToggle] = useState(false);
  const [agree, setAgree] = useState(false);
  const today = new Date();
  const formattedDate = `${today.getFullYear()}. ${
    today.getMonth() + 1
  }. ${today.getDate()}`;

  useEffect(() => {
    setSearchParams(window.location.search.substring(1));

    const timer = setInterval(() => {
      setCard((current) => !current);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // useEffect(() => {
  //   if (searchParams) {
  //     const data = DecompressedString(searchParams);
  //     setAnswerUser1(data);

  //     const timer = setTimeout(() => {
  //       setStatus((prevStatus) => !prevStatus);
  //     }, 2600);
  //     return () => clearTimeout(timer);
  //   } else {
  //     const timer = setTimeout(() => {
  //       setStatus((prevStatus) => !prevStatus);
  //     }, 4000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [searchParams]);

  // if (searchParams)
  //   return (
  //     <section className="w-full absolute left-[0] top-[9.4rem]">
  //       {!status && (
  //         <div className="h-[70svh]">
  //           <AnimationLogo />
  //         </div>
  //       )}
  //       {status && (
  //         <>
  //           <h1 className="text-[2.6rem] text-center animate-[pledge1_3s_ease-in-out] ">
  //             사랑하는 나의 배우자가
  //             <br />
  //             육아 서약서 캠페인 참여를 요청하셨습니다.
  //           </h1>
  //           <div className="mt-[9.3rem] w-[46.2rem] h-[34.5rem] mx-auto">
  //             <Image src="/receiver_bg.png" alt="bg" width={462} height={345} />
  //             {/* <a href="https://kr.freepik.com/free-vector/illustration-of-a-man-giving-a-love-letter_3132804.htm#query=%EB%B6%80%EB%B6%80%20%EC%84%9C%EC%95%BD%EC%84%9C&position=0&from_view=search&track=ais&uuid=118961a1-c45b-4f79-9523-3d83063aa74f">작가 rawpixel.com</a> 출처 Freepik */}
  //           </div>

  //           <BottomButton
  //             label="서약서 만들기"
  //             onClick={() => {
  //               router.push(`/promotion/pledge/form2?${searchParams}`);
  //             }}
  //             status={true}
  //           />
  //         </>
  //       )}
  //     </section>
  //   );

  return (
    <section className="w-full max-w-[52rem] h-[100svh] flex justify-between flex-col">
      <div className="flex flex-col items-center justify-center h-full">
        <Image
          className="w-[16.2rem] h-[5.6rem]"
          src="/logo.png"
          alt="육아응원"
          width={162}
          height={56}
        />
        <Image
          className="w-[2.4rem] h-[2.4rem] mt-[2rem]"
          src="/icon_x.png"
          alt="colaboration"
          width={24}
          height={24}
        />
        <h4 className="text-[2rem] mt-[2rem]">
          <b>아이의 목소리</b>로 쓰여진 우리 <b>가족 서약서</b>
        </h4>

        <Image
          className="w-[19.2rem] h-[5rem] mt-[2rem]"
          src="/text_mother_father.png"
          alt="엄마&아빠"
          width={192}
          height={50}
        />
        <Image
          className="w-[20.3rem] h-[12.7rem] mt-[1.5rem]"
          src="/text_heart.png"
          alt="마음을알려줘"
          width={203}
          height={127}
        />
        <div className="card-wrap-main w-[12rem] h-[25.2rem]  mt-[2rem]">
          <div className={`card ${card ? "rotate" : ""}`}>
            <div className="card-front w-[12rem] h-[19.2rem]">
              <div className="relative w-[12rem] h-[19.2rem]">
                <Image
                  src="/card_main_bg.png"
                  alt="서약서 카드"
                  width="120"
                  height="192"
                />
                <Letter
                  style={{
                    position: "absolute",
                    top: "0.6rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "7rem",
                  }}
                />
                <div className="relative mt-[-1.8rem] text-center text-[0.8rem]">
                  {getDate(formattedDate)}
                </div>
              </div>
            </div>
            <div className="card-back w-[12rem]">
              <div className="relative w-[12rem] h-[19.2rem]">
                <Image
                  src="/card_main_bg.png"
                  alt="서약서 카드"
                  width="120"
                  height="192"
                />
                <Letter
                  style={{
                    position: "absolute",
                    top: "0.6rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "7rem",
                  }}
                />
                <div className="relative mt-[-1.8rem] text-center text-[0.8rem]">
                  {getDate(formattedDate)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[1.6rem] mt-[2rem]">
          지금까지 <b>4,808,929333개</b>의 가족 서약서가 생성됐어요!
        </div>
      </div>
      <button
        onClick={() => router.push("/promotion/pledge/info")}
        className="w-full min-h-[8rem] bg-[#FFE695] text-[2.1rem]"
      >
        참여하기
      </button>
    </section>
  );
}
