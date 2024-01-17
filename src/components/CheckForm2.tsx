"use client";

import { SurveyListType } from "@/model/survey";
import { AnswerUser1State, AnswerUser2State } from "@/store/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DecompressedString from "@/util/decompressedString";
import { addResultPage } from "@/app/api/pages";
import CustomBottomModal from "./CustomBottomModal";
import Loading from "./Loading";
import Script from "next/script";

interface CheckFormProps {
  survey2: SurveyListType[];
}
export default function CheckForm({ survey2 }: CheckFormProps) {
  const router = useRouter();
  const [answerUser1, setAnswerUser1] = useRecoilState(AnswerUser1State);
  const answerUser2 = useRecoilValue(AnswerUser2State);
  const [searchParams, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    setSearchParams(window.location.search.substring(1));
  }, []);

  useEffect(() => {
    if (searchParams) {
      const data = DecompressedString(searchParams);
      setAnswerUser1(data);
    }
  }, [searchParams]);

  const getAnswer = (survey: SurveyListType) => {
    const getAnswerData = answerUser2.filter(
      (answer) => answer.s_id === survey.id
    )[0];
    if (getAnswerData) {
      const getAnswerValue = survey.choiceAnswer.filter(
        (answerItem) => answerItem.answer_id === getAnswerData.c_id
      )[0].answer_value;
      return getAnswerValue;
    }
  };

  const getSubjectValue = (id: number) => {
    const getSubjectAnswer = answerUser2.filter(
      (answer) => answer.s_id === id
    )[0];
    if (getSubjectAnswer && getSubjectAnswer.sv) return getSubjectAnswer.sv;
  };

  const handleSaveData = async () => {
    if (answerUser1[6].sv && answerUser1[7].sv) {
      const params = {
        user1_name: answerUser1[6].sv,
        user1_gender: answerUser1[6].c_id,
        baby_name: answerUser1[7].sv,
        user1_data: JSON.stringify(answerUser1),
        user2_data: JSON.stringify(answerUser2),
      };
      const data = await addResultPage(params).then((res) => {
        if (res) {
          setId(res);
          setLoading(true);
        }
      });
    }
  };
  const handleRoute = () => {
    if (
      !window.confirm(
        "확인을 누를 경우 처음부터 다시 진행해야 합니다.\n처음으로 돌아가시겠습니까?"
      )
    )
      return;
    router.push(`/promotion/pledge/form2/first?${searchParams}`);
  };
  return (
    <div className="w-full h-[100dvh]">
      <div className="pt-[8rem]">
        <div className="mb-[2rem]">
          <ins
            className="kakao_ad_area"
            style={{ display: "none" }}
            data-ad-unit="DAN-y2D6EQJCiGdcSImB"
            data-ad-width="300"
            data-ad-height="250"
          />
          <Script
            type="text/javascript"
            src="//t1.daumcdn.net/kas/static/ba.min.js"
            async
          />
        </div>
        <div className="overflow-y-auto max-h-calcResultPage pb-[10rem]">
          {survey2.map((survey) => (
            <div
              className={`text-[5rem] mx-[3.5rem] mb-[3rem] px-[3rem] py-[2rem] border rounded-2xl`}
              key={survey.id + survey.choiceQuestion}
            >
              <div>
                <div className="text-[2.1rem] leading-[2.8rem] font-bold text-center">
                  step {survey.id}
                </div>
                <div className="my-[1.8rem]">
                  <div className="text-[1.8rem] leading-[2.6rem] text-[#999]">
                    Q. {survey.choiceQuestion}
                  </div>
                  <div
                    className={`w-full flex text-[2.1rem] leading-[2.8rem] font-bold py-[1.5rem] mt-[1.2rem] rounded-[2rem] bg-white justify-start`}
                  >
                    <span
                      className={`w-[4rem] min-w-[4rem] h-[4rem] rounded-[2rem] flex justify-center items-center bg-[#FFD3D0] text-white`}
                    >
                      A
                    </span>
                    <span className="block ml-[1rem] mt-[0.4rem]">
                      {getAnswer(survey)}
                    </span>
                  </div>
                </div>
                {survey.type === "mix" && (
                  <>
                    <div className="w-full h-[0.1rem] bg-[#ccc] my-[2rem] " />
                    <div className="text-[1.8rem] leading-[2.6rem] text-[#999]">
                      Q. {survey.subjectQuestion}
                    </div>
                    <div
                      className={`w-full flex text-[2.1rem] leading-[2.8rem] font-bold py-[1.5rem] mt-[1.2rem] rounded-[2rem] bg-white justify-start`}
                    >
                      <span
                        className={`w-[4rem] min-w-[4rem] h-[4rem] rounded-[2rem] flex justify-center items-center bg-[#FFD3D0] text-white`}
                      >
                        A
                      </span>
                      <span className="block ml-[1rem] mt-[0.4rem]">
                        {answerUser2 && getSubjectValue(survey.id)}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 flex">
        <button
          className="w-[26rem] max-w-[518px] h-[8rem] text-[2.4rem] bg-[#cccccc]"
          onClick={handleRoute}
        >
          다시 하기
        </button>
        <button
          className="w-[26rem] max-w-[518px] h-[8rem] text-[2.4rem] bg-[#F9E9B3]"
          onClick={handleSaveData}
        >
          서약서 생성
        </button>
      </div>
      <CustomBottomModal
        toggle={loading}
        handleToggle={() => setLoading((prev) => !prev)}
      >
        <Loading url={`/promotion/pledge/result2/${id}/share`} />
      </CustomBottomModal>
    </div>
  );
}
