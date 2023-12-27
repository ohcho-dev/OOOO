"use client";

import { AnswerUser1, SurveyListType } from "@/model/survey";
import { AnswerUser1State, AnswerUser2State } from "@/store/atom";
import parseDate from "@/util/date";
import { getDate } from "@/util/getDateTime";
import useTypingWords from "@/util/useTypingWords";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

interface DocumentProps {
  survey1: SurveyListType[];
  survey2: SurveyListType[];
}
export default function Document({ survey1, survey2 }: DocumentProps) {
  const [answerUser1, setAnswerUser1] = useRecoilState(AnswerUser1State);
  const [answerUser2, setAnswerUser2] = useRecoilState(AnswerUser2State);
  const [newAnswerUser1, setNewAnswerUser1] = useState<AnswerUser1[]>([]);
  const [newAnswerUser2, setNewAnswerUser2] = useState<AnswerUser1[]>([]);
  const typeWords1 = useTypingWords(`${newAnswerUser1[7]?.sv}네 서약서`, 200);
  const typedWords2 = useTypingWords("엄마! 아빠! 함께 약속해요!", 200);

  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  useEffect(() => {
    if (answerUser1) {
      let newDataList: AnswerUser1[] = [];
      answerUser1.map((answer) => {
        const valueArray = survey1.filter(
          (array) => array.id === answer.s_id
        )[0];
        const choiceValue = valueArray.choiceAnswer.filter(
          (choice) => choice.answer_id === answer.c_id
        )[0].answer_value;

        const newData = { ...answer, c_value: choiceValue };
        return newDataList.push(newData);
      });
      setNewAnswerUser1(newDataList);
    }
  }, [answerUser1]);

  useEffect(() => {
    if (answerUser2) {
      let newDataList: AnswerUser1[] = [];
      answerUser2.map((answer) => {
        const valueArray = survey2.filter(
          (array) => array.id === answer.s_id
        )[0];
        const choiceValue = valueArray.choiceAnswer.filter(
          (choice) => choice.answer_id === answer.c_id
        )[0].answer_value;

        const newData = { ...answer, c_value: choiceValue };
        return newDataList.push(newData);
      });
      setNewAnswerUser2(newDataList);
    }
  }, [answerUser2]);

  console.log(newAnswerUser1, newAnswerUser2);
  if (newAnswerUser1.length < 7 && newAnswerUser2.length < 6)
    return <div>Loading...</div>;

  return (
    <div className="text-[1.4rem] leading-[2rem] px-[6.5rem]">
      <div className="text-[1.8rem] leading-[4rem] font-bold text-center mb-[0.7rem] h-[4rem]">
        {/* {newAnswerUser1[7].sv || ""}네 서약서 */}
        {typeWords1[0]}
      </div>
      <div className="text-[3rem] leading-[4rem] font-bold align-text-top text-center mb-[2.7rem] h-[4rem]">
        {typeWords1[1] && typedWords2[0]}
      </div>

      {typedWords2[1] && (
        <div className="animate-[paperText_1s_ease-in-out]">
          {/* 세상에서 가장 ~~한 우리 ~~ */}
          <div className="mb-[2.4rem]">
            <div>
              세상에서 가장{" "}
              <b>
                {newAnswerUser1[0].c_value} 우리 {newAnswerUser2[6].c_value}
              </b>{" "}
              {newAnswerUser2[6].sv || ""}
            </div>

            <div>
              세상에서 가장{" "}
              <b>
                {newAnswerUser2[0].c_value} 우리 {newAnswerUser1[6].c_value}
              </b>{" "}
              {newAnswerUser1[6].sv || ""}
            </div>

            <div>
              세상에 <b>하나뿐인 {newAnswerUser1[7].c_value} </b>
              {newAnswerUser1[7].sv || ""}
            </div>
          </div>

          {/* 우리 가족은 서약합니다 */}
          <div className="mb-[1.1rem]">
            우리 가족은 서로를 이해하고 도우며
            <br />
            <b>
              {newAnswerUser2[2].c_value === newAnswerUser1[2].c_value
                ? `${newAnswerUser2[2].c_value}과 ${newAnswerUser1[2].c_value}`
                : `${newAnswerUser1[2].c_value}`}
            </b>
            이 넘치는
            <br /> 화목한 가정을 만들기 위해 아래와 같이 서약합니다.
          </div>

          {/* user1 약속 */}
          <div className="mb-[2rem]">
            <div className="leading-[3rem]">
              <b>
                {newAnswerUser1[6].c_value}는, 엄마에게 이렇게 약속해주세요!
              </b>
            </div>
            <div className="leading-[2rem]">
              <div>
                <b>첫째</b>, 아내가 <b>{newAnswerUser2[3].c_value}</b>에면 늘
                곁에서 도우며 함께 하겠습니다.
              </div>
              <div>
                <b>둘째</b>, <b>{newAnswerUser2[4].c_value}</b>으로 고민하는
                아내의 마음을 이해하고
                <br />
                함께 풀어가겠습니다.
              </div>
              <div>
                <b>셋째</b>, 언제나 아이에게 <b>{newAnswerUser2[5].c_value}</b>{" "}
                아빠가 되겠습니다.
              </div>
            </div>
          </div>

          {/* user2 약속 */}
          <div className="mb-[2rem]">
            <div className="leading-[3rem]">
              <b>
                {newAnswerUser2[6].c_value}는, 엄마에게 이렇게 약속해주세요!
              </b>
            </div>
            <div className="leading-[2rem]">
              <div>
                <b>첫째</b>, 남편이 <b>{newAnswerUser1[3].c_value}</b>에면 늘
                곁에서
                <br />
                도우며 함께 하겠습니다.
              </div>
              <div>
                <b>둘째</b>, <b>{newAnswerUser1[4].c_value}</b>으로 고민하는
                남편의 마음을 이해하고
                <br />
                함께 풀어가겠습니다.
              </div>
              <div>
                <b>셋째</b>, 언제나 아이에게 <b>{newAnswerUser1[5].c_value}</b>{" "}
                엄마가 되겠습니다.
              </div>
            </div>
          </div>

          {/* 아이 약속 */}
          <div className="mb-[4.4rem]">
            <div className="leading-[3rem]">
              <b>
                나 {newAnswerUser1[7].sv || ""}는, 엄마♥️아빠에게 이렇게
                약속할게요!
              </b>
            </div>
            <div className="leading-[3rem]">
              <div>
                <b>하나</b>, 엄마의 <b>{newAnswerUser1[1].c_value}</b>과 아빠의{" "}
                <b>{newAnswerUser2[1].c_value}</b>을 배우고 닮아갈게요!
              </div>
              <div>
                <b>둘</b>,{" "}
                <b>
                  {newAnswerUser2[2].c_value}과 {newAnswerUser1[2].c_value}
                </b>{" "}
                안에서 누구보다 행복한 아이로 자랄게요!
              </div>
            </div>
          </div>

          <div className="text-center">{formattedDate}</div>
        </div>
      )}
    </div>
  );
}
