"use client";
import BottomButton from "@/components/BottomButton";
import Toolbar from "@/components/toolbar";

import { useRecoilState, useRecoilValue } from "recoil";
import { AnswerUser1State, OpenToastState } from "@/store/atom";
import { useEffect, useState } from "react";
import CompressedString from "@/util/compressedString";
import CustomBottomModal from "@/components/CustomBottomModal";
import KakaoShareButton from "@/components/KakaoShareButton";
import { copyURL } from "@/util/CopyUrl";
import PledgeCardWrap from "@/components/PledgeCardWrap";
import Toast from "@/components/Toast";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const answerUser1 = useRecoilValue(AnswerUser1State);
  const [openToast, setOpenToast] = useRecoilState(OpenToastState);
  const [url, setUrl] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (answerUser1) {
      const compress = CompressedString(answerUser1);
      const url = window?.location.host + "/promotion/pledge?" + compress;
      setUrl(url);
    }
  }, [answerUser1]);

  if (!answerUser1[7]?.sv) return <div>Loading...</div>;

  return (
    <div>
      <div className="text-[2.4rem] text-center font-bold mt-[4rem]">
        배우자에게 보낼 준비가 되었어요!
      </div>
      <div>
        <PledgeCardWrap name={answerUser1[7].sv} />
      </div>
      <div
        className="fixed w-full max-w-[52rem] text-center bottom-[10rem] text-[1.8rem] underline"
        onClick={() => router.push("/promotion/pledge/form/first")}
      >
        다시 만들고 싶으세요?
      </div>
      <CustomBottomModal
        toggle={toggle}
        handleToggle={() => setToggle(!toggle)}
      >
        <div className="px-[3.4rem] py-[4rem]">
          <div className="text-[2.8rem] font-bold mb-[5rem]">
            공유하실 방법을 선택해주세요.
          </div>
          <div className="flex justify-evenly text-[1.6rem] cursor-pointer">
            <KakaoShareButton
              description="사랑하는 나의 배우자가 육아 서약서 캠페인 참여를 요청하셨습니다."
              url={`https://${url}`}
            />
            {openToast && <Toast text="클립보드에 저장되었습니다." />}
            <div
              className="text-center"
              onClick={() => {
                copyURL(`https://${url}`);
                setOpenToast(true);
              }}
            >
              <div className="w-[6rem] h-[6rem] flex justify-center items-center">
                <Image src="/link.png" alt="URL 복사" width={60} height={60} />
              </div>
              <span className="block mt-[0.8rem] text-[1.6rem]">
                URL
                <br />
                복사
              </span>
            </div>
          </div>
        </div>
      </CustomBottomModal>
      <BottomButton
        label="배우자에게 공유하기"
        status={true}
        onClick={() => setToggle(!toggle)}
      />
    </div>
  );
}
