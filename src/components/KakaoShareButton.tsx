import React, { useEffect } from "react";

type KakaoShareButtonProps = {
  url: string;
  image: string;
  title: string;
  description: string;
  btnName: string;
};

const KakaoShareButton = ({
  url,
  image,
  title,
  description,
  btnName,
}: KakaoShareButtonProps) => {
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
      objectType: "feed",
      content: {
        title: title,
        description: description,
        imageUrl: image,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: btnName,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <div className="text-center" onClick={handleShare}>
      <img
        className="w-[6rem] h-[6rem]"
        src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
        alt="카카오톡 공유 보내기 버튼"
      />
      <span className="block mt-[0.8rem] text-[1.6rem]">
        카카오톡
        <br />
        공유하기
      </span>
    </div>
  );
};

export default KakaoShareButton;
