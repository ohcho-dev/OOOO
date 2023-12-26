"use client";

import {
  AnswerUser1,
  SelectButtonType,
  SurveyListType,
  SurveyType,
} from "@/model/survey";
import Question from "./Question";
import GridLayout from "./GridLayout";
import FormButton from "./FormButton";
import SubjectForm from "./SubjectForm";
import StepTitle from "./StepTitle";
import { useRecoilState } from "recoil";
import { AnswerUser1State, formStepState } from "@/store/atom";
import { useEffect, useRef, useState } from "react";
import BottomButton from "./BottomButton";
import useWindowDimensions from "@/util/getWindowDimensions";
import { useRouter } from "next/navigation";

const DEFAULT_MIX_DATA = {
  s_id: 0,
  c_id: 0,
  sv: "",
};
export default function FormLayout(survey: SurveyType) {
  const router = useRouter();
  const pageRef = useRef<HTMLInputElement | null>(null);
  const { width, height } = useWindowDimensions();
  const [formStep, setFormStep] = useRecoilState(formStepState);
  const [answerUser1, setAnswerUser1] = useRecoilState(AnswerUser1State);
  const [mixData, setMixData] = useState<AnswerUser1>(DEFAULT_MIX_DATA);
  const [selectValue, setSelectValue] = useState(0);

  useEffect(() => {
    setAnswerUser1([]);
    setFormStep(0);
  }, []);

  useEffect(() => {
    const translateXValue =
      width && width <= 520 ? `${formStep * 100}vw` : `${formStep * 520}px`;
    if (pageRef.current) {
      pageRef.current.style.transform = `translateX(-${translateXValue})`;
    }
    const filterAnswer = answerUser1.filter((x) => x.s_id === formStep + 1);
    if (filterAnswer[0]?.sv) {
      setMixData(filterAnswer[0]);
      setSelectValue(filterAnswer[0].c_id);
    } else if (filterAnswer[0]) {
      setSelectValue(filterAnswer[0].c_id);
    } else {
      setSelectValue(0);
    }
  }, [formStep]);

  const HandleMixData = (sv: string) => {
    setMixData({
      ...mixData,
      sv: sv,
    });
  };

  const HandleNextStepBtn = () => {
    if (answerUser1[formStep]) {
      const newAnswerUser1 = answerUser1.filter(
        (item) => item.s_id !== formStep + 1
      );
      newAnswerUser1.push({
        s_id: mixData.s_id,
        c_id: mixData.c_id,
        sv: mixData.sv,
      });
      setAnswerUser1(newAnswerUser1);

      return setTimeout(() => {
        setFormStep(formStep + 1);
        setMixData(DEFAULT_MIX_DATA);
      }, 200);
    }
    setAnswerUser1([...answerUser1, mixData]);
    setMixData(DEFAULT_MIX_DATA);
    // 스텝이 설문 총 개수와 같을 경우(마지막 설문일 때) 버튼 클릭 시 결과페이지로 이동하고 아니면 다음 스텝으로 이동
    if (formStep === survey.survey.length - 1) {
      return router.push("/promotion/pledge/check");
    } else {
      setFormStep(formStep + 1);
    }
  };

  const HandleData = ({ s_id, c_id, type, sv = "" }: SelectButtonType) => {
    if (answerUser1[formStep]) {
      if (type === "choice") {
        const newAnswerUser1 = answerUser1.filter(
          (item) => item.s_id !== formStep + 1
        );
        newAnswerUser1.push({
          s_id: s_id,
          c_id: c_id,
          sv: sv,
        });
        setAnswerUser1(newAnswerUser1);
        setSelectValue(c_id);

        return setTimeout(() => {
          setFormStep(formStep + 1);
        }, 200);
      }
      if (type === "mix") {
      }
    }

    if (type === "mix") {
      setMixData({
        ...mixData,
        s_id: s_id,
        c_id: c_id,
      });
    } else {
      SelectButton({
        s_id: s_id,
        c_id: c_id,
        sv: sv,
      });
    }
  };

  const SelectButton = ({ s_id, c_id, sv = "" }: AnswerUser1) => {
    setAnswerUser1([
      ...answerUser1,
      {
        s_id: s_id,
        c_id: c_id,
        sv: sv,
      },
    ]);
    setSelectValue(c_id);
    setTimeout(() => {
      setFormStep(formStep + 1);
    }, 200);
  };

  return (
    <div
      className={`flex max-[520px]:w-[${
        100 * survey.survey.length
      }vw] h-[100svh] absolute left-0 top-0 transition-all`}
      ref={pageRef}
    >
      {survey.survey.map((surveyItems: SurveyListType) => (
        <div
          className={`max-[520px]:w-[100vw] min-[521px]: w-[520px]`}
          key={surveyItems.id + surveyItems.choiceQuestion}
        >
          <StepTitle number={surveyItems.id} />
          <Question label={surveyItems.choiceQuestion} />
          <GridLayout grid={surveyItems.grid} width={width} height={height}>
            {surveyItems.choiceAnswer.map((answerItem) => {
              return (
                <div key={answerItem.answer_id + answerItem.answer_value}>
                  <FormButton
                    id={answerItem.answer_id}
                    status={
                      surveyItems.type === "mix"
                        ? mixData.c_id === answerItem.answer_id
                        : selectValue === answerItem.answer_id
                    }
                    label={answerItem.answer_value}
                    onClick={() =>
                      HandleData({
                        s_id: surveyItems.id,
                        c_id: answerItem.answer_id,
                        type: surveyItems.type,
                      })
                    }
                  />
                </div>
              );
            })}
          </GridLayout>
          {surveyItems.type === "mix" && surveyItems.subjectQuestion && (
            <>
              <SubjectForm
                question={surveyItems.subjectQuestion}
                useResetButton
                mixData={mixData}
                handleMixData={(e) => HandleMixData(e)}
              />

              <BottomButton
                label="다음 단계"
                status={true}
                onClick={() => HandleNextStepBtn()}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
