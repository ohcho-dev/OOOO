"use client";
import BottomButton from "@/components/BottomButton";
import CustomBottomModal from "@/components/CustomBottomModal";
import KakaoShareButton from "@/components/KakaoShareButton";
import Toast from "@/components/Toast";
import { OpenToastState } from "@/store/atom";
import { copyURL } from "@/util/CopyUrl";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const [openToast, setOpenToast] = useRecoilState(OpenToastState);
  const [url, setUrl] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (params.id) {
      const url =
        window?.location.host + "/promotion/pledge/result2/" + params.id;
      setUrl(url);
    }
  }, [params]);
  console.log(url);

  return (
    <div>
      <div className="py-[1rem]">
        <Image
          className="mx-auto w-[12rem] "
          src="/logo.png"
          alt="육아응원"
          width={162}
          height={81}
        />
      </div>
      <div className="text-center text-[2.4rem] mt-[4rem] mb-[5rem]">
        <b>우리 가족 서약서 완성!</b>
        <br />
        배우자가 완성된 서약서를 기다리고 있어요.
      </div>
      <Image
        className="mx-auto w-[36rem]"
        src="/share.png"
        alt="공유해보세요"
        width={366}
        height={366}
      />
      <div className="text-[1.8rem] text-center mt-[3rem] font-bold leading-[4rem]">
        배우자에게 전송한 링크에 접속해서
        <br />
        함께 서약서를 확인해보세요!
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
