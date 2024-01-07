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
      <div className="pt-[10rem]">
        <PledgeCardWrap name={answerUser1[7].sv} />
      </div>
      <div
        className="absolute w-full text-center bottom-0 text-[1.8rem] underline"
        onClick={() => router.push("/promotion/pledge/form/first")}
      >
        다시 만들고 싶으세요?
      </div>
      <CustomBottomModal
        toggle={toggle}
        handleToggle={() => setToggle(!toggle)}
      >
        <div className="flex justify-around text-[1.6rem] p-[3rem] cursor-pointer">
          <KakaoShareButton description="설명" url={`https://${url}`} />
          {openToast && <Toast text="클립보드에 저장되었습니다." />}
          <div
            className="text-center"
            onClick={() => {
              copyURL(`https://${url}`);
              setOpenToast(true);
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
      </CustomBottomModal>
      <BottomButton
        label="배우자에게 공유하기"
        status={true}
        onClick={() => setToggle(!toggle)}
      />
    </div>
  );
}
