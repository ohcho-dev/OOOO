"use client";
import AnimationLogo from "@/components/AnimationLogo";
import BottomButton from "@/components/BottomButton";
import CustomBottomModal from "@/components/CustomBottomModal";
import { AnswerUser1State } from "@/store/atom";
import DecompressedString from "@/util/decompressedString";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

export default function PledgeMainPage() {
  const router = useRouter();
  const [status, setStatus] = useState<boolean>(false);
  const setAnswerUser1 = useSetRecoilState(AnswerUser1State);
  const [searchParams, setSearchParams] = useState("");
  const [toggle, setToggle] = useState(false);
  const [agree, setAgree] = useState(false);
  useEffect(() => {
    setSearchParams(window.location.search.substring(1));
  }, []);

  useEffect(() => {
    if (searchParams) {
      const data = DecompressedString(searchParams);
      setAnswerUser1(data);

      const timer = setTimeout(() => {
        setStatus((prevStatus) => !prevStatus);
      }, 2600);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setStatus((prevStatus) => !prevStatus);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  if (searchParams)
    return (
      <section className="w-full absolute left-[0] top-[9.4rem]">
        {!status && (
          <div className="h-[70svh]">
            <AnimationLogo />
          </div>
        )}
        {status && (
          <>
            <h1 className="text-[2.6rem] text-center animate-[pledge1_3s_ease-in-out] ">
              사랑하는 나의 배우자가
              <br />
              육아 서약서 캠페인 참여를 요청하셨습니다.
            </h1>
            <div className="mt-[9.3rem] w-[46.2rem] h-[34.5rem] mx-auto">
              <Image src="/receiver_bg.png" alt="bg" width={462} height={345} />
            </div>

            <CustomBottomModal
              toggle={toggle}
              handleToggle={() => setToggle(!toggle)}
            >
              <div className="p-[3rem] cursor-pointer">
                <div className="w-full text-[2.8rem] font-bold">
                  서비스 이용 약관에 동의해주세요.
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
                  !agree ? "bg-[#cccccc] text-white" : "bg-[#FFEBAA] text-black"
                }`}
                onClick={() =>
                  agree &&
                  router.push(`/promotion/pledge/form2/${searchParams}`)
                }
                disabled={!agree}
              >
                서약서 만들러 가자!
              </button>
            </CustomBottomModal>
            <BottomButton
              label="서약서 만들기"
              onClick={() => {
                router.push(`/promotion/pledge/form2?${searchParams}`);
              }}
              status={true}
            />
          </>
        )}
      </section>
    );

  return (
    <section className="w-full max-w-[52rem] h-[100svh] bg-[url('/info_bg.png')] bg-contain bg-center bg-origin-contain">
      <div className="w-full absolute left-[0] top-[50%] translate-y-[-50%]">
        <h1 className="text-[2.6rem] leading-[4.5rem] text-center font-bold">
          나의 반쪽인 사람과 만드는
          <br />
          육아 서약서
        </h1>
        <div className="flex animate-[pledge1_4s_ease-in-out]">
          <div className="w-full h-[6rem] border-r-[0.1rem] border-black mt-[0.5rem] mb-[0.9rem]"></div>
          <div className="w-full"></div>
        </div>
        <h2 className="text-[2.1rem] leading-[3.6rem] text-center mb-[3.1rem] animate-[pledge2_4s_ease-in-out] font-bold">
          우리 가족의 모습을 생각하며
          <br />
          터치만으로 간단한 서약서를
        </h2>
        <h2 className="text-[2.1rem] text-center mb-[3.1rem] animate-[pledge3_4s_ease-in-out] font-bold">
          아이의 말투를 빌려서
          <br />
          지켜나갈 서약서를 만듭니다.
        </h2>
        <h2 className="text-[2.1rem] text-center leading-[3.6rem] animate-[pledge4_4s_ease-in-out] font-bold">
          추억이 될 육아 서약서를
          <br />
          배우자와 만들어보세요.
        </h2>
      </div>
      <CustomBottomModal
        toggle={toggle}
        handleToggle={() => setToggle(!toggle)}
      >
        <div className="p-[3rem] cursor-pointer">
          <div className="w-full text-[2.8rem] font-bold">
            서비스 이용 약관에 동의해주세요.
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
            !agree ? "bg-[#cccccc] text-white" : "bg-[#FFEBAA] text-black"
          }`}
          onClick={() => agree && router.push("/promotion/pledge/form")}
          disabled={!agree}
        >
          서약서 만들러 가자!
        </button>
      </CustomBottomModal>
      <BottomButton
        label="이벤트 참여하기"
        onClick={() => {
          setToggle(!toggle);
        }}
        status={status}
      />
    </section>
  );
}
