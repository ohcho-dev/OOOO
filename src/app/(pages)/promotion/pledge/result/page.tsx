"use client";
import BottomButton from "@/components/BottomButton";
import Toolbar from "@/components/toolbar";
import Image from "next/image";

import { useRecoilValue } from "recoil";
import { AnswerUser1State } from "@/store/atom";
import { useEffect, useState } from "react";
import CompressedString from "@/util/compressedString";
import CustomBottomModal from "@/components/CustomBottomModal";
import KakaoShareButton from "@/components/KakaoShareButton";
import { copyURL } from "@/util/CopyUrl";
import PledgeCard from "@/components/PledgeCard";
import PledgeCardWrap from "@/components/PledgeCardWrap";

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

  if (!answerUser1[7]?.sv) return <div>Loading...</div>;

  return (
    <div>
      <Toolbar />
      <PledgeCardWrap name={answerUser1[7].sv} />
      <CustomBottomModal
        toggle={toggle}
        handleToggle={() => setToggle(!toggle)}
      >
        <div className="flex justify-around text-[1.6rem] p-[3rem] cursor-pointer">
          <KakaoShareButton description="설명" url={`https://${url}`} />
          <div
            className="text-center"
            onClick={() => copyURL(`https://${url}`)}
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
