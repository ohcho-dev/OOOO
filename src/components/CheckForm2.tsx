"use client";

import { SurveyListType } from "@/model/survey";
import { AnswerUser2State } from "@/store/atom";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface CheckFormProps {
  survey2: SurveyListType[];
}
export default function CheckForm({ survey2 }: CheckFormProps) {
  const router = useRouter();
  const answerUser2 = useRecoilValue(AnswerUser2State);
  const [searchParams, setSearchParams] = useState("");
  useEffect(() => {
    setSearchParams(window.location.search.substring(1));
  }, []);

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

  return (
    <div className="w-full h-[100svh]">
      <div className="pt-[8rem]">
        <div className="overflow-y-auto max-h-calcResultPage pb-[10rem]">
          {survey2.map((survey) => (
            <div
              className={`text-[5rem] mx-[3.5rem] mt-[4rem] px-[3rem] py-[2rem] border rounded-2xl ${
                survey.id % 2 === 0 ? "bg-[#f6f7f9] border-none" : "bg-white"
              }`}
              key={survey.id + survey.choiceQuestion}
            >
              <div>
                <div className="text-[2.1rem] leading-[2.8rem] font-bold text-center">
                  step {survey.id}
                </div>
                <div className="my-[1.8rem]">
                  <div className="text-[2rem] leading-[2.4rem] text-[#999]">
                    {survey.choiceQuestion}
                  </div>
                  <div
                    className={`w-full flex text-[2.1rem] leading-[2.8rem] font-bold p-[1.5rem] mt-[1.2rem] rounded-[2rem] ${
                      survey.id % 2 === 1 ? "bg-[#f6f7f9]" : "bg-white"
                    }`}
                  >
                    <span
                      className={`w-[4rem] min-w-[4rem] h-[4rem] rounded-[2rem] flex justify-center items-center
                        ${survey.id % 2 === 0 ? "bg-[#f6f7f9]" : "bg-white"}`}
                    >
                      <span className="block ml-[-0.2rem]">A</span>
                    </span>
                    <span className="block ml-[1rem] mt-[0.4rem]">
                      {getAnswer(survey)}
                    </span>
                  </div>
                </div>
                {survey.type === "mix" && (
                  <>
                    <div className="w-full h-[0.1rem] bg-black my-[2rem]" />
                    <div className="text-[1.8rem] leading-[2.4rem] text-[#999]">
                      {survey.subjectQuestion}
                    </div>
                    <div
                      className={`w-full flex text-[2.1rem] leading-[2.8rem] font-bold p-[1.5rem] mt-[1.2rem] rounded-[2rem] ${
                        survey.id % 2 === 1 ? "bg-[#f6f7f9]" : "bg-white"
                      }`}
                    >
                      <span
                        className={`w-[4rem] min-w-[4rem] h-[4rem] rounded-[2rem] flex justify-center items-center
                        ${survey.id % 2 === 0 ? "bg-[#f6f7f9]" : "bg-white"}`}
                      >
                        <span className="block ml-[-0.2rem]">A</span>
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
          className="w-[26rem] max-w-[518px] h-[8rem] text-[2.4rem] bg-[#cccccc] text-white"
          onClick={() => router.push(`/promotion/pledge/form2?${searchParams}`)}
        >
          다시 선택하기
        </button>
        <button
          className="w-[26rem] max-w-[518px] h-[8rem] text-[2.4rem] bg-[#FFEBAA] text-black"
          onClick={() =>
            router.push(`/promotion/pledge/result2?${searchParams}`)
          }
        >
          최종 완료
        </button>
      </div>
    </div>
  );
}
