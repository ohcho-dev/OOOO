"use client";
import BottomButton from "@/components/BottomButton";
import Toolbar from "@/components/toolbar";
import Image from "next/image";

import { useRecoilValue } from "recoil";
import { AnswerUser1State } from "@/store/atom";
import { useEffect, useState } from "react";
import CompressedString from "@/util/compressedString";
import Link from "next/link";
import CustomBottomModal from "@/components/CustomBottomModal";
import KakaoShareButton from "@/components/KakaoShareButton";

export default function Page() {
  const answerUser1 = useRecoilValue(AnswerUser1State);
  const [url, setUrl] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (answerUser1) {
      const compress = CompressedString(answerUser1);
      const url = window?.location.host + "/promotion/pledge?" + compress;
      setUrl(url);
    }
  }, [answerUser1]);
  return (
    <div>
      <Toolbar />
      <div className="w-full h-[100svh] mb-[10rem] overflow-auto scroll-m-0">
        <Image
          className="pt-[8rem] mx-auto absolute"
          src="/paper.png"
          alt="서약서 배경"
          width={480}
          height={699}
        />
        <Image
          className="pt-[8rem] px-[4rem] mx-auto absolute top-[4rem]"
          src="/test.svg"
          alt="서약서 내용"
          width={600}
          height={600}
        />
      </div>
      <CustomBottomModal
        toggle={toggle}
        handleToggle={() => setToggle(!toggle)}
      >
        <div className="flex justify-around text-[1.6rem] p-[3rem]">
          <KakaoShareButton description="설명" url={`https://${url}`} />
          <div className="text-center">
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
