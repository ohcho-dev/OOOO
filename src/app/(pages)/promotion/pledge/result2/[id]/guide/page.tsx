"use client";
import InfoToolbar from "@/components/InfoToolbar";
import KakaoShareButton from "@/components/KakaoShareButton";
import Toast from "@/components/Toast";
import { OpenModalState, OpenToastState } from "@/store/atom";
import { copyURL } from "@/util/CopyUrl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function Page() {
  const params = useParams();

  const [url, setUrl] = useState("");
  const [count, setCount] = useState(0);
  const [OpenToast, setOpenToast] = useRecoilState(OpenToastState);

  useEffect(() => {
    const id = params.id;
    const url = window?.location.host + "/promotion/pledge/result2/" + id;
    if (params.id) {
      setUrl(url);
    }

    const timer = setInterval(() => {
      setCount(1);
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [params]);

  return (
    <div className="">
      <InfoToolbar title="서약서 활용하기" />
      <div className="overflow-x-hidden overflow-y-scroll h-[100svh]">
        <div className=" bg-white mt-[10rem] ">
          <div className="w-full text-[#FF5C00] text-center text-[2.4rem] font-bold">
            Step 1
          </div>
          <div className="text-center text-[2.8rem] font-bold mt-[2rem]">
            앨범에 저장하기
          </div>
          <button
            onClick={() => {
              copyURL(url), setOpenToast(true);
            }}
            className="mt-[3rem] mb-[4.6rem] bg-[#FFE695] text-[1.8rem] w-[30rem] h-[6rem] block mx-auto rounded-[2rem]"
          >
            서약서 이미지 저장하기
          </button>
        </div>

        <div className="bg-[#FFF8E0] pt-[4.3rem] pb-[5.9rem]">
          <div className="w-full text-[#FF5C00] text-center text-[2.4rem] font-bold">
            Step 2
          </div>
          <div className="text-center text-[2.8rem] font-bold mt-[2rem]">
            카카오톡 프로필로 자랑하기
          </div>
          <div className="mt-[5rem] mb-[5.5rem]">
            <Image
              className="mx-auto"
              src="/profile_guide.png"
              alt="프로필 가이드"
              width={350}
              height={451}
            />
          </div>
          <button
            onClick={() => {
              copyURL(url), setOpenToast(true);
            }}
            className="mt-[3rem] bg-[#FFE695] text-[1.8rem] w-[30rem] h-[6rem] block mx-auto rounded-[2rem]"
          >
            서약서 URL 복사하기
          </button>
          <button
            onClick={() => {
              copyURL(url), setOpenToast(true);
            }}
            className="mt-[1.4rem] mb-[4.6rem] bg-[#FFE695] text-[1.8rem] w-[30rem] h-[6rem] block mx-auto rounded-[2rem]"
          >
            프로필 배경화면 저장하기
          </button>
        </div>

        <div className="bg-white pt-[4.3rem] pb-[5.9rem]">
          <div className="w-full text-[#FF5C00] text-center text-[2.4rem] font-bold">
            Step 3
          </div>
          <div className="text-center text-[2.8rem] font-bold mt-[2rem]">
            이용후기 남기기
          </div>
          <textarea
            placeholder="텍스트를 입력해주세요."
            className="block mx-auto w-[44rem] border h-[20rem] mt-[5rem] text-[1.6rem] p-[2rem]"
          ></textarea>
          <button
            onClick={() => {
              copyURL(url), setOpenToast(true);
            }}
            className="mt-[2rem] mb-[4.6rem] bg-[#FFE695] text-[1.8rem] w-[14rem] h-[6rem] block mx-auto rounded-[2rem]"
          >
            제출하기
          </button>
        </div>

        <div className="bg-[#FFF8E0] pt-[4.3rem] pb-[5.9rem]">
          <div className="w-full text-[#FF5C00] text-center text-[2.4rem] font-bold">
            Step 4
          </div>
          <div className="text-center text-[2.8rem] font-bold mt-[2rem]">
            지인에게 공유하기
          </div>
          <div className="text-center text-[1.8rem] mt-[1.6rem]">
            가까운 지인들에게도 추천해주세요!
          </div>
          <div className="mt-[3.8rem] flex justify-evenly">
            {count > 0 && (
              <KakaoShareButton
                description="설명"
                url={window?.location.origin}
              />
            )}
            {OpenToast && <Toast text="클립보드에 저장되었습니다." />}
            <div
              className="text-center"
              onClick={() => {
                copyURL(window?.location.origin), setOpenToast(true);
              }}
            >
              <div className="bg-[#f6f7f9] rounded-[8rem] w-[8rem] h-[8rem] text-[4rem] flex justify-center items-center">
                🔗
              </div>
              <span className="block mt-[0.8rem]">
                URL
                <br />
                복사
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}