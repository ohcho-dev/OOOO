import React, { useEffect } from "react";
import Image from "next/image";
import KakaoImage from "../../../public/kakao_logo.png";

type KakaoShareButtonProps = {
  url: string;
  description: string;
};

const KakaoShareButton = ({ url, description }: KakaoShareButtonProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const { Kakao } = window;

      if (!Kakao.isInitialized()) {
        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
      }
    }
  }, []);

  const handleShare = () => {
    const { Kakao } = window;

    Kakao.Share.sendDefault({
      objectType: "text",
      text: description,
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    });
  };

  return (
    <div className="text-center" onClick={handleShare}>
      <img
        className="w-[8rem] h-[8rem]"
        src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
        alt="카카오톡 공유 보내기 버튼"
      />
      <span className="block mt-[0.8rem]">
        카카오톡
        <br />
        공유하기
      </span>
    </div>
  );
};

export default KakaoShareButton;
