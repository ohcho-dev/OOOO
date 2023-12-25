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
  survey_id: 0,
  choice_id: 0,
  subject_value: "",
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
    const filterAnswer = answerUser1.filter(
      (x) => x.survey_id === formStep + 1
    );
    if (filterAnswer[0]?.subject_value) {
      setMixData(filterAnswer[0]);
      setSelectValue(filterAnswer[0].choice_id);
    } else if (filterAnswer[0]) {
      setSelectValue(filterAnswer[0].choice_id);
    } else {
      setSelectValue(0);
    }
  }, [formStep]);

  const HandleMixData = (subject_value: string) => {
    setMixData({
      ...mixData,
      subject_value: subject_value,
    });
  };

  const HandleNextStepBtn = () => {
    if (answerUser1[formStep]) {
      const newAnswerUser1 = answerUser1.filter(
        (item) => item.survey_id !== formStep + 1
      );
      newAnswerUser1.push({
        survey_id: mixData.survey_id,
        choice_id: mixData.choice_id,
        subject_value: mixData.subject_value,
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
      return router.push("/promotion/pledge/result");
    } else {
      setFormStep(formStep + 1);
    }
  };

  const HandleData = ({
    survey_id,
    choice_id,
    type,
    subject_value = "",
  }: SelectButtonType) => {
    if (answerUser1[formStep]) {
      if (type === "choice") {
        const newAnswerUser1 = answerUser1.filter(
          (item) => item.survey_id !== formStep + 1
        );
        newAnswerUser1.push({
          survey_id: survey_id,
          choice_id: choice_id,
          subject_value: subject_value,
        });
        setAnswerUser1(newAnswerUser1);
        setSelectValue(choice_id);

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
        survey_id: survey_id,
        choice_id: choice_id,
      });
    } else {
      SelectButton({
        survey_id: survey_id,
        choice_id: choice_id,
        subject_value: subject_value,
      });
    }
  };

  const SelectButton = ({
    survey_id,
    choice_id,
    subject_value = "",
  }: AnswerUser1) => {
    setAnswerUser1([
      ...answerUser1,
      {
        survey_id: survey_id,
        choice_id: choice_id,
        subject_value: subject_value,
      },
    ]);
    setSelectValue(choice_id);
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
          <GridLayout grid={surveyItems.grid} height={height}>
            {surveyItems.choiceAnswer.map((answerItem) => {
              return (
                <div key={answerItem.answer_id + answerItem.answer_value}>
                  <FormButton
                    id={answerItem.answer_id}
                    status={
                      surveyItems.type === "mix"
                        ? mixData.choice_id === answerItem.answer_id
                        : selectValue === answerItem.answer_id
                    }
                    label={answerItem.answer_value}
                    onClick={() =>
                      HandleData({
                        survey_id: surveyItems.id,
                        choice_id: answerItem.answer_id,
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
