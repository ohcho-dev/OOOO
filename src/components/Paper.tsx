"use client";
import PledgeCardWrap from "@/components/PledgeCardWrap";
import Document from "@/components/document";
import { ResultDataType, SurveyListType } from "@/model/survey";
import {
  AnswerUser1State,
  AnswerUser2State,
  OpenModalState,
  OpenToastState,
} from "@/store/atom";
import CustomBottomModal from "./CustomBottomModal";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import Image from "next/image";
import KakaoShareButton from "./KakaoShareButton";
import { copyURL } from "@/util/CopyUrl";
import Toast from "./Toast";

interface PaperPageProps {
  data: ResultDataType;
  survey1: SurveyListType[];
  survey2: SurveyListType[];
}
export default function PaperPage({ data, survey1, survey2 }: PaperPageProps) {
  const [url, setUrl] = useState("");
  const [count, setCount] = useState(0);
  const [OpenToast, setOpenToast] = useRecoilState(OpenToastState);
  const [openModal, setOpenModal] = useRecoilState(OpenModalState);
  const [answerUser1, setAnswerUser1] = useRecoilState(AnswerUser1State);
  const [answerUser2, setAnswerUser2] = useRecoilState(AnswerUser2State);

  useEffect(() => {
    const url = window?.location.href;
    setUrl(url);

    const timer = setInterval(() => {
      setCount(1);
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (data) {
      setAnswerUser1(JSON.parse(data.user1_data));
      setAnswerUser2(JSON.parse(data.user2_data));
    }
  }, [data]);
  return (
    <div>
      <div className="bg-[#FFF8E0] py-[1rem]">
        <Image
          className="mx-auto w-[12rem] "
          src="/logo.png"
          alt="육아응원"
          width={162}
          height={81}
        />
      </div>
      <div className="bg-[#FFF8E0]">
        <PledgeCardWrap name={data.baby_name} />
      </div>
      <div className="mt-[-5rem] bg-white">
        <div className="pt-[3.4rem] mb-[2.7rem] text-[2.8rem] text-center leading-[4rem] font-bold">
          우리 가족 백점만점
          <br />
          서약서 뽐내기
        </div>
        <div className="w-full text-[#FF5C00] text-center text-[2.4rem] font-bold">
          Step 1
        </div>
        <div className="mt-[2rem] mb-[4.6rem] text-[1.8rem] text-center leading-[3rem]">
          가족과 함께 만든 육아서약서를 남기시고 싶다면
          <br />
          카카오 프로필에 배경과 URL을 남겨보세요
        </div>
        <button
          onClick={() => {
            copyURL(url), setOpenToast(true);
          }}
          className="mb-[2.6rem] bg-[#FFE695] text-[1.8rem] w-[30rem] h-[6rem] block mx-auto"
        >
          서약서 URL 받기
        </button>
        <button className="mb-[5.5rem] bg-[#FFE695] text-[1.8rem] w-[30rem] h-[6rem] block mx-auto">
          배경 이미지 받기
        </button>
      </div>
      <div className="bg-[#FFF8E0] pt-[4.3rem] pb-[5.9rem]">
        <div className="w-full text-[#FF5C00] text-center text-[2.4rem] font-bold">
          Step 2
        </div>
        <div className="text-center text-[1.8rem] mt-[2rem]">
          카카오톡 프로필 적용하실 분은
          <br />
          아래 내용을 참고해주세요.
        </div>
        <div className="mt-[3.7rem] mb-[5.5rem]">
          <Image
            className="mx-auto"
            src="/profile_guide.png"
            alt="프로필 가이드"
            width={350}
            height={451}
          />
        </div>
        <button className="bg-[#FFE695] text-[1.8rem] w-[30rem] h-[6rem] block mx-auto">
          프로필 적용 가이드
        </button>
      </div>

      <div className="bg-white pt-[4.3rem] pb-[5.9rem]">
        <div className="w-full text-[#FF5C00] text-center text-[2.4rem] font-bold">
          Step 3
        </div>
        <div className="text-center text-[1.8rem] mt-[2rem]">
          가족들과 함께 만드는 육아 서약서
          <br />
          가까운 지인에게 공유해서 함께 서약서를 만들어보세요.
        </div>
        <div className="mt-[3.8rem] flex justify-evenly">
          {count > 0 && <KakaoShareButton description="설명" url={url} />}
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
      {openModal && (
        <CustomBottomModal
          toggle={openModal}
          handleToggle={() => setOpenModal(false)}
        >
          <Document survey1={survey1} survey2={survey2} />
        </CustomBottomModal>
      )}
    </div>
  );
}
