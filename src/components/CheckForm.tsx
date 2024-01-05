"use client";

import { SurveyListType } from "@/model/survey";
import { AnswerUser1State } from "@/store/atom";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";

interface CheckFormProps {
  survey1: SurveyListType[];
}
export default function CheckForm({ survey1 }: CheckFormProps) {
  const router = useRouter();
  const answerUser1 = useRecoilValue(AnswerUser1State);

  const getAnswer = (survey: SurveyListType) => {
    const getAnswerData = answerUser1.filter(
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
    const getSubjectAnswer = answerUser1.filter(
      (answer) => answer.s_id === id
    )[0];
    if (getSubjectAnswer && getSubjectAnswer.sv) return getSubjectAnswer.sv;
  };

  return (
    <div className="w-full h-[100svh]">
      <div className="pt-[8rem]">
        <div className="overflow-y-auto max-h-calcResultPage pb-[10rem]">
          {survey1.map((survey) => (
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
                      className={`w-[4rem] min-w-[4rem] h-[4rem] rounded-[2rem] flex justify-center items-center bg-[#FFA89F] text-white`}
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
                        className={`w-[4rem] min-w-[4rem] h-[4rem] rounded-[2rem] flex justify-center items-center bg-[#FFA89F] text-white`}
                      >
                        A
                      </span>
                      <span className="block ml-[1rem] mt-[0.4rem]">
                        {answerUser1 && getSubjectValue(survey.id)}
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
          onClick={() => router.push("/promotion/pledge/form/first")}
        >
          다시 하기
        </button>
        <button
          className="w-[26rem] max-w-[518px] h-[8rem] text-[2.4rem] bg-[#FFEBAA] text-black"
          onClick={() => router.push("/promotion/pledge/result")}
        >
          서약서 생성
        </button>
      </div>
    </div>
  );
}
