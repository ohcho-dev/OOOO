"use client";
import { addReview } from "@/app/api/reviews";
import InfoToolbar from "@/components/InfoToolbar";
import KakaoShareButton from "@/components/KakaoShareButton";
import ProfileCarousel from "@/components/ProfileCarousel";
import Toast from "@/components/Toast";
import {
  CapturedCardState,
  CapturedDocumentState,
  OpenToastState,
} from "@/store/atom";
import { copyURL } from "@/util/CopyUrl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function Page() {
  const params = useParams();
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [count, setCount] = useState(0);
  const [OpenToast, setOpenToast] = useRecoilState(OpenToastState);
  const [capturedCard, setCapturedCard] = useRecoilState(CapturedCardState);
  const [capturedDocument, setCapturedDocument] = useRecoilState(
    CapturedDocumentState
  );

  useEffect(() => {
    const id = params.id;
    const url = window?.location.host + "/promotion/pledge/result2/" + id;
    if (params.id) {
      setUrl(url);
    }

    const timer = setInterval(() => {
      setCount(1);
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [params]);

  const downloadCardImage = () => {
    const link = document.createElement("a");
    // 이미지 데이터 URL을 href 속성에 할당합니다.
    link.href = capturedCard;
    // 다운로드할 파일의 이름을 설정합니다.
    link.download = "card.png";
    // a 태그를 클릭 이벤트를 발생시켜 파일 다운로드를 시작합니다.
    link.click();
  };
  const downloadDocumentImage = () => {
    const link = document.createElement("a");
    // 이미지 데이터 URL을 href 속성에 할당합니다.
    link.href = capturedDocument;
    // 다운로드할 파일의 이름을 설정합니다.
    link.download = "document.png";
    // a 태그를 클릭 이벤트를 발생시켜 파일 다운로드를 시작합니다.
    link.click();
  };

  const handleContent = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = evt.target;
    if (value.length > 300)
      return alert("이용 후기는 300자 이상 입력이 불가능합니다.");
    setContent(value);
  };

  const postReview = async () => {
    if (content.length > 300) {
      return;
    }
    const param = {
      page_id: Number(params.id),
      contents: content,
    };
    const data = await addReview(param).then((res) => {
      if (res) {
        setContent("");
        alert("제출이 완료됐습니다.");
      }
    });
  };
  return (
    <div className="">
      <InfoToolbar title="서약서 활용하기" />
      <div className="overflow-x-hidden overflow-y-scroll h-[100dvh]">
        <div className=" bg-white mt-[10rem] ">
          <div className="w-full text-[#F25D24] text-center text-[2.4rem] font-bold">
            Step 1
          </div>
          <div className="text-center text-[2.8rem] font-bold mt-[2rem]">
            앨범에 저장하기
          </div>
          <button
            onClick={downloadDocumentImage}
            className="mt-[3rem] mb-[4.6rem] bg-[#F9E9B3] text-[1.8rem] w-[30rem] h-[6rem] block mx-auto rounded-[2rem]"
          >
            서약서 이미지 저장하기
          </button>
        </div>

        <div className="bg-[#FFF8E0] pt-[4.3rem] pb-[5.9rem] relative">
          <div className="w-[5.7rem] h-[5.1rem] bg-[url(/star.webp)] bg-no-repeat bg-blend-darken bg-[#FFF8E0] absolute top-[1.5rem] left-[16.5rem]" />
          {/* Image by <a href="https://www.freepik.com/free-vector/hand-drawn-sparkling-stars-collection_16139383.htm#query=%EB%B3%84%ED%91%9C&position=23&from_view=search&track=ais&uuid=051eef59-fe08-4721-adf4-1c1e77749091">Freepik</a> */}
          <div className="relative w-full text-[#F25D24] text-center text-[2.4rem] font-bold">
            Step 2
          </div>
          <div className="text-center text-[2.8rem] font-bold mt-[2rem]">
            카카오톡 프로필로 자랑하기
          </div>
          <div className="relative">
            <div className="w-[36rem] h-[36rem] absolute top-[9rem] left-[50%] translate-x-[-50%] bg-[#FFE695] rounded-[18rem]" />
            <div className="mt-[3.4rem]">
              <ProfileCarousel>
                <div>
                  <Image
                    className="w-[20.3rem] h-[43.9rem] mx-auto"
                    src="/guide_1.webp"
                    alt="카카오톡 프로필 변경 항목을 클릭해주세요."
                    width={203}
                    height={439}
                    priority
                  />
                  <div className="mt-[3.6rem] text-[1.8rem] text-center">
                    카카오톡 프로필 변경 항목을 클릭해주세요.
                  </div>
                  <Image
                    className="w-[2.3rem] h-[4.7rem] absolute bottom-[6rem] left-[24rem] animate-bounce"
                    src="/hand.webp"
                    alt="클릭하세요."
                    width={23}
                    height={47}
                  />
                </div>

                <div>
                  <Image
                    className="w-[20.4rem] h-[43.9rem] mx-auto"
                    src="/guide_2.webp"
                    alt="카카오톡 프로필 변경 항목을 클릭해주세요."
                    width={204}
                    height={439}
                    priority
                  />
                  <div className="mt-[3.6rem] text-[1.8rem] text-center">
                    서약서 URL 주소를 복사 한 뒤<br />
                    카카오톡에서 링크 아이콘을 클릭해주세요.
                  </div>
                  <Image
                    className="w-[2.3rem] h-[4.7rem] absolute bottom-[5rem] left-[29.2rem] animate-bounce"
                    src="/hand.webp"
                    alt="클릭하세요."
                    width={23}
                    height={47}
                  />
                </div>

                <div>
                  <Image
                    className="w-[20.5rem] h-[43.9rem] mx-auto"
                    src="/guide_3.webp"
                    alt="카카오톡 프로필 변경 항목을 클릭해주세요."
                    width={205}
                    height={439}
                    priority
                  />
                  <div className="mt-[3.6rem] text-[1.8rem] text-center">
                    주황색 영역에 URL 주소를 넣으신 뒤<br />
                    완료버튼을 클릭해주세요.
                  </div>
                  <Image
                    className="w-[2.3rem] h-[4.7rem] absolute top-[3.5rem] left-[33rem] animate-bounce"
                    src="/hand.webp"
                    alt="클릭하세요."
                    width={23}
                    height={47}
                  />
                </div>

                <div>
                  <Image
                    className="w-[20.5rem] h-[43.9rem] mx-auto"
                    src="/guide_4.webp"
                    alt="카카오톡 프로필 변경 항목을 클릭해주세요."
                    width={203}
                    height={439}
                    priority
                  />
                  <div className="mt-[3.6rem] text-[1.8rem] text-center">
                    프로필 링크 적용이 완료되었습니다.
                  </div>
                </div>
              </ProfileCarousel>
            </div>
          </div>
          <button
            onClick={() => {
              copyURL(url), setOpenToast(true);
            }}
            className="mt-[3rem] bg-[#F9E9B3] text-[1.8rem] w-[30rem] h-[6rem] block mx-auto rounded-[2rem]"
          >
            서약서 URL 복사하기
          </button>
          <button
            onClick={downloadCardImage}
            className="mt-[1.4rem] mb-[4.6rem] bg-[#F9E9B3] text-[1.8rem] w-[30rem] h-[6rem] block mx-auto rounded-[2rem]"
          >
            프로필 배경화면 저장하기
          </button>
        </div>

        <div className="bg-white pt-[4.3rem] pb-[5.9rem]">
          <div className="w-full text-[#F25D24] text-center text-[2.4rem] font-bold">
            Step 3
          </div>
          <div className="text-center text-[2.8rem] font-bold mt-[2rem]">
            이용후기 남기기
          </div>
          <div className="text-center mt-[1.4rem] text-[1.8rem]">
            후기를 남겨주시면 더 좋은 서비스로 찾아올게요!
          </div>
          <textarea
            placeholder="텍스트를 입력해주세요."
            rows={6}
            maxLength={300}
            value={content}
            onChange={(evt) => handleContent(evt)}
            className="block mx-auto w-[44rem] border mt-[5rem] text-[1.6rem] p-[2rem]"
          ></textarea>
          <div className="text-right pr-[3rem] pt-[1rem] text-[1.6rem]">
            <span className={content.length >= 300 ? "text-[#F25D24]" : ""}>
              {content.length}
            </span>{" "}
            / 300
          </div>
          <button
            onClick={postReview}
            className="mt-[2rem] mb-[4.6rem] bg-[#F25D24] text-[2.1rem] text-white w-[20rem] h-[6rem] block mx-auto rounded-[2rem]"
          >
            제출하기
          </button>
        </div>

        <div className="bg-[#FFF8E0] pt-[4.3rem] pb-[5.9rem]">
          <div className="w-full text-[#F25D24] text-center text-[2.4rem] font-bold">
            Step 4
          </div>
          <div className="text-center text-[2.8rem] font-bold mt-[2rem]">
            지인에게 공유하기
          </div>
          <div className="text-center text-[1.8rem] mt-[1.6rem]">
            가까운 지인들에게도 추천해주세요!
          </div>
          <div className="mt-[3.8rem] flex justify-evenly">
            {count > 0 && (
              <KakaoShareButton
                title="우리 가족만의 서약서를 만들어보세요!"
                description="육아응원 :: 가족 공동 서약서"
                btnName="서약서 만들기"
                image="https://oooo-pledge.s3.ap-northeast-2.amazonaws.com/image/kakao_share_main.png"
                url={window?.location.origin}
              />
            )}
            <div
              className="text-center"
              onClick={() => {
                copyURL(window?.location.origin), setOpenToast(true);
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
        {OpenToast && <Toast text="클립보드에 저장되었습니다." />}
      </div>
    </div>
  );
}
