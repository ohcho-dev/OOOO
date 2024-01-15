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
    if (answerUser1 && process.env.NEXT_PUBLIC_HOST) {
      const compress = CompressedString(answerUser1);
      const url =
        process.env.NEXT_PUBLIC_HOST + "/promotion/pledge?" + compress;
      setUrl(url);
    }
  }, [answerUser1]);
  const handleRoute = () => {
    if (
      !window.confirm(
        "확인을 누를 경우 처음부터 다시 진행해야 합니다.\n처음으로 돌아가시겠습니까?"
      )
    )
      return;
    router.push("/promotion/pledge/form/first");
  };
  if (!answerUser1[7]?.sv) return <div>Loading...</div>;

  return (
    <div>
      <Image
        className="mx-auto w-[11.2rem] mt-[1.3rem]"
        src="/logo.webp"
        alt="육아응원"
        width={112}
        height={41.75}
      />
      <div>
        <PledgeCardWrap name={answerUser1[7].sv} />
      </div>
      <div
        className="relative z-30 w-full max-w-[52rem] text-center mt-[-10rem] text-[1.8rem] underline"
        onClick={handleRoute}
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
              title="우리 가족 서약서: 아이의 목소리를 담은 유쾌한 약속"
              description="키워드 입력만으로 소중한 서약서 만들기♥️"
              btnName="함께 만들기"
              image="https://oooo-pledge.s3.ap-northeast-2.amazonaws.com/image/kakao_share_user_1_v2.png"
              url={url}
            />
            {openToast && <Toast text="클립보드에 저장되었습니다." />}
            <div
              className="text-center"
              onClick={() => {
                copyURL(url);
                setOpenToast(true);
              }}
            >
              <div className="w-[6rem] h-[6rem] flex justify-center items-center">
                <Image src="/link.webp" alt="URL 복사" width={60} height={60} />
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
        label="배우자에게 참여 요청하기"
        status={true}
        onClick={() => setToggle(!toggle)}
      />
    </div>
  );
}
