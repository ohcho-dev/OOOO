"use client";

import { SelectButtonType, SurveyListType, SurveyType } from "@/model/survey";
import Question from "./Question";
import GridLayout from "./GridLayout";
import FormButton from "./FormButton";
import SubjectForm from "./SubjectForm";
import StepTitle from "./StepTitle";
import { useRecoilState } from "recoil";
import { AnswerUser1State, formStepState } from "@/store/atom";
import { useEffect, useRef } from "react";
import BottomButton from "./BottomButton";

export default function FormLayout(survey: SurveyType) {
  const pageRef = useRef<HTMLInputElement | null>(null);
  const [formStep, setFormStep] = useRecoilState(formStepState);
  const [answerUser1, setAnswerUser1] = useRecoilState(AnswerUser1State);

  useEffect(() => {
    console.log(pageRef.current);
    const translateXValue = formStep * 100;
    if (pageRef.current) {
      pageRef.current.style.transform = `translateX(-${translateXValue}vw)`;
    }
  }, [formStep]);

  const SelectButton = ({
    survey_id,
    choice_id,
    type,
    subject_value = "",
  }: SelectButtonType) => {
    setAnswerUser1([
      ...answerUser1,
      {
        survey_id: survey_id,
        choice_id: choice_id,
        subject_value: subject_value,
      },
    ]);

    if (type === "choice") {
      setTimeout(() => {
        setFormStep(formStep + 1);
      }, 300);
    }
  };

  return (
    <div
      className={`flex w-[${
        100 * survey.survey.length
      }vw] h-[100svh] absolute left-0 top-0 transition-all`}
      ref={pageRef}
    >
      {survey.survey.map((surveyItems: SurveyListType) => (
        <div
          className="w-[100vw]"
          key={surveyItems.id + surveyItems.choiceQuestion}
        >
          <StepTitle number={surveyItems.id} />
          <Question label={surveyItems.choiceQuestion} />
          <GridLayout grid={surveyItems.grid}>
            {surveyItems.choiceAnswer.map((answerItem) => {
              console.log(
                answerUser1[formStep + 1]?.choice_id,
                answerItem.answer_id
              );
              return (
                <>
                  <FormButton
                    key={answerItem.answer_id + answerItem.answer_value}
                    id={answerItem.answer_id}
                    status={
                      answerUser1[formStep]?.choice_id === answerItem.answer_id
                    }
                    label={answerItem.answer_value}
                    onClick={() =>
                      SelectButton({
                        survey_id: surveyItems.id,
                        choice_id: answerItem.answer_id,
                        type: surveyItems.type,
                        subject_value: "",
                      })
                    }
                  />
                </>
              );
            })}
          </GridLayout>
          {surveyItems.type === "mix" && surveyItems.subjectQuestion && (
            <>
              <SubjectForm
                question={surveyItems.subjectQuestion}
                useResetButton
              />

              <BottomButton
                label="다음 단계"
                status={true}
                onClick={() => setFormStep(formStep + 1)}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
