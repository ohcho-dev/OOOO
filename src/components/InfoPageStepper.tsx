"use client";

import { infoStepState } from "@/store/atom";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import CustomBottomModal from "./CustomBottomModal";
import { useRouter } from "next/navigation";
import InfoPledgeCard from "./InfoPledgeCard";

const STEPS_1 = [
  {
    id: 0,
    title: (
      <h1>
        우리 가족, 배우자, 내 아리를 떠올리며
        <br />
        <b>가장 어울리는 단어</b>를 골라주세요!
      </h1>
    ),
    image: "/info1.png",
    left: "left-[0]",
  },
  {
    id: 1,
    title: (
      <h1>
        내 <b>배우자에게 공유</b>하여
        <br />
        서약서의 반쪽을 채워주세요!
      </h1>
    ),
    image: "/info2.png",
    left: "left-[33.3%]",
  },
  {
    id: 2,
    title: (
      <h1>
        <b>아이의 목소리</b>를 담은
        <br />
        따뜻한 <b>가족 서약서</b>가 탄생합니다!
      </h1>
    ),
    image: "",
    left: "left-[66.7%]",
  },
];
const STEPS_2 = [
  {
    id: 0,
    title: (
      <h1>
        우리 가족, 배우자, 내 아이를 떠올리며
        <br />
        <b>가장 어울리는 단어</b>를 골라주세요!
      </h1>
    ),
    image: "/info1.png",
  },
  {
    id: 1,
    title: (
      <h1>
        <b>아이의 목소리</b>를 담은
        <br />
        따뜻한 <b>가족 서약서</b>가 탄생합니다!
      </h1>
    ),
    image: "",
  },
  {
    id: 2,
    title: (
      <h1>
        완성된 서약서를 <b>배우자에게 공유</b>하고
        <br />
        함께 서약서를 확인하세요.
      </h1>
    ),
    image: "/info3.png",
  },
];
export default function InfoPageStepper() {
  const router = useRouter();

  const [infoStep, setInfoStep] = useRecoilState(infoStepState);
  const [toggle, setToggle] = useState(false);
  const [agree, setAgree] = useState(false);
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    setInfoStep(0);
    setSearchParams(window.location.search.substring(1));
  }, []);

  const handleNext = () => {
    setInfoStep((infoStep) => infoStep + 1);
  };

  return (
    <div className="h-[100svh] flex flex-col justify-between items-center">
      <div className="w-full h-full ">
        {searchParams && (
          <>
            {STEPS_2.map((contents) => {
              return (
                <div
                  className={`w-full h-[90svh] bg-white mx-auto flex flex-col justify-center items-center absolute ${
                    infoStep === contents.id ? "z-10" : ""
                  }`}
                  key={contents.id}
                >
                  <div className="text-[2.4rem] text-center">
                    {contents.title}
                  </div>
                  {contents.image && (
                    <Image
                      className="mt-[7rem] max-w-[42.5rem]"
                      src={contents.image}
                      alt="참여 방법"
                      width={403}
                      height={403}
                    />
                  )}
                  {/* <a href="https://www.freepik.com/free-vector/curiosity-people-concept-illustration_30576696.htm#page=4&query=choose&position=1&from_view=search&track=sph&uuid=d8125466-63e9-4585-be47-303bb6d57545">Image by storyset</a> on Freepik */}
                  {/* Image by <a href="https://www.freepik.com/free-vector/flat-design-characters-chatting-dating-app_5380865.htm#page=2&query=profile&position=12&from_view=search&track=sph&uuid=8c04433a-082f-48f1-8188-d49e54678510">Freepik</a> */}
                  {/* Image by <a href="https://www.freepik.com/free-vector/dating-app-concept-flat-design_5230633.htm#page=3&query=share&position=0&from_view=search&track=sph&uuid=f35b7d49-ee79-4ccc-aaff-af823e188214">Freepik</a> */}
                  {!contents.image && <InfoPledgeCard />}
                </div>
              );
            })}
          </>
        )}
        {!searchParams && (
          <>
            {STEPS_1.map((contents) => {
              return (
                <div
                  className={`w-full h-[90svh] bg-white mx-auto flex flex-col justify-center items-center absolute ${
                    infoStep === contents.id ? "z-10" : ""
                  }`}
                  key={contents.id}
                >
                  <div className="text-[2.4rem] text-center">
                    {contents.title}
                  </div>
                  {contents.image && (
                    <Image
                      className="mt-[7rem] max-w-[42.5rem]"
                      src={contents.image}
                      alt="참여 방법"
                      width={403}
                      height={403}
                    />
                  )}
                  {!contents.image && <InfoPledgeCard />}
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="absolute z-10 w-[30rem] h-[1rem] left-[50%] translate-x-[-50%] bottom-[13rem] mx-auto">
        <div className="absolute w-[30rem] h-[1rem] rounded-[1rem] bg-[#D9D9D9]" />
        <div
          className={`absolute w-[10rem] h-[1rem] rounded-[1rem] bg-[#F25D24] transition-all duration-300 ${
            infoStep === 0
              ? "left-0"
              : infoStep === 1
              ? "left-[33.3%]"
              : "left-[66.7%]"
          }`}
        />
      </div>
      <button
        onClick={() => (infoStep === 2 ? setToggle(true) : handleNext())}
        className="bg-[#F9E9B3] min-h-[8rem] w-full text-[2.1rem]"
      >
        {infoStep === 2 ? "시작하기" : "다음으로"}
      </button>

      <CustomBottomModal
        toggle={toggle}
        handleToggle={() => setToggle(!toggle)}
      >
        <div className="p-[3rem] cursor-pointer">
          <div className="w-full text-[2.8rem] font-bold">
            잠깐! 서비스 약관에 동의해주세요.
          </div>
          <div className="flex justify-between mt-[3.4rem] align-top">
            <div className="flex" onClick={() => setAgree(!agree)}>
              <div className="w-[3rem] h-[3rem]">
                <Image
                  src={agree ? "/check_on.png" : "/check_off.png"}
                  alt="개인정보 동의"
                  width={30}
                  height={30}
                />
              </div>
              <div className="ml-[2.6rem]">
                <div className="text-[2.1rem]">
                  개인정보 수집 및 이용 동의(필수)
                </div>
                <div className="mt-[1.5rem] text-[1.5rem]">
                  약관 비동의 시 서비스 이용이 불가합니다.
                </div>
              </div>
            </div>
            <div
              className="w-[2.4rem] h-[2.4rem] mt-[1rem]"
              onClick={() => router.push("/promotion/pledge/agree")}
            >
              <Image
                className="rotate-180"
                src="/back.png"
                alt="자세히 보기"
                width={18}
                height={24}
              />
            </div>
          </div>
        </div>

        <button
          className={`w-full h-[8rem] text-[2.4rem] ${
            !agree ? "bg-[#cccccc] text-white" : "bg-[#F9E9B3]"
          }`}
          onClick={() =>
            agree &&
            (searchParams
              ? router.push(`/promotion/pledge/form2/first?${searchParams}`)
              : router.push(`/promotion/pledge/form/first`))
          }
          disabled={!agree}
        >
          네, 동의할게요!
        </button>
      </CustomBottomModal>
    </div>
  );
}
