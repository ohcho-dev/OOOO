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

  return (
    <div>
      <div className="w-full h-[100svh] max-h-calcResultPage flex flex-col justify-center">
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
          <div className="text-center text-[2.4rem] mt-[6rem] mb-[5rem]">
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
          {/* <a href="https://www.freepik.com/free-vector/big-isolated-cartoon-young-girl-boy-love-couple-sharing-caring-love-3d-illustration_12953857.htm#page=3&query=share&position=39&from_view=search&track=sph&uuid=349ea626-ab1a-4e9a-a9c4-4844e0aa0aed">Image by jcomp</a> on Freepik */}
          <div className="text-[2.1rem] text-center mt-[3rem] font-bold leading-[4rem]">
            배우자에게 전송한 링크에 접속해서
            <br />
            함께 서약서를 읽어보세요!
          </div>
        </div>
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
