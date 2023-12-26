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
              className="text-[5rem]"
              key={survey.id + survey.choiceQuestion}
            >
              <div>
                <div>step {survey.id}</div>
                <div>{survey.choiceQuestion}</div>
                <div>{getAnswer(survey)}</div>
                {survey.type === "mix" && (
                  <>
                    <div>{survey.subjectQuestion}</div>
                    <div>{answerUser1 && getSubjectValue(survey.id)}</div>
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
          onClick={() => router.push("/promotion/pledge/form")}
        >
          처음으로
        </button>
        <button
          className="w-[26rem] max-w-[518px] h-[8rem] text-[2.4rem] bg-[#FFEBAA] text-black"
          onClick={() => router.push("/promotion/pledge/result")}
        >
          다음 단계
        </button>
      </div>
    </div>
  );
}
