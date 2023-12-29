"use client";

import { AnswerUser1, SurveyListType } from "@/model/survey";
import {
  AnswerUser1State,
  AnswerUser2State,
  OpenModalState,
} from "@/store/atom";
import parseDate from "@/util/date";
import { getDate } from "@/util/getDateTime";
import useTypingWords from "@/util/useTypingWords";
import Image from "next/image";
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
  const [openModal, setOpenModal] = useRecoilState(OpenModalState);

  const today = new Date();
  const formattedDate = `${today.getFullYear()}. ${
    today.getMonth() + 1
  }. ${today.getDate()}`;

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
  if (
    newAnswerUser1.length < 7 ||
    newAnswerUser2.length < 6 ||
    !newAnswerUser1[7].sv
  )
    return <div>Loading...</div>;

  return (
    <div className="w-[52rem] h-[95svh] overflow-x-scroll text-[2rem] leading-[2.8rem] text-center bg-[url(/flower_img.png)] bg-cover bg-center px-[3rem]">
      <div
        className="absolute top-[3rem] right-[3rem]"
        onClick={() => setOpenModal(false)}
      >
        <Image src="/close.png" width={27} height={27} alt="닫기" />
      </div>
      <div className="px-[3rem] my-[5rem] overflow-x-scroll">
        <div className="text-[1.8rem] leading-[4rem] font-bold text-center mb-[0.7rem] h-[4rem]">
          {typeWords1[0]}
        </div>
        <div className="text-[3rem] leading-[4rem] font-bold align-text-top text-center mb-[4.4rem] h-[4rem]">
          {typeWords1[1] && typedWords2[0]}
        </div>

        {typedWords2[1] && (
          <div className="animate-[paperText_1s_ease-in-out]">
            {/* 세상에서 가장 ~~한 우리 ~~ */}
            <div className="mb-[4.6rem]">
              <div>
                <b>
                  {newAnswerUser1[0].c_value} 우리 {newAnswerUser2[6].c_value}
                </b>{" "}
                {newAnswerUser2[6].sv || ""}
              </div>

              <div>
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
            <div className="mb-[5.8rem]">
              우리 가족은{" "}
              <b>
                {newAnswerUser2[2].c_value !== newAnswerUser1[2].c_value
                  ? `${newAnswerUser2[2].c_value}과 ${newAnswerUser1[2].c_value}`
                  : `${newAnswerUser1[2].c_value}`}
              </b>
              이 넘치는 화목한 가정을
              <br />
              만들기 위해 아래와 같이 서약합니다.
            </div>

            {/* user1 약속 */}
            <div className="mb-[4.8rem]">
              <div className="relative z-20 text-[2.2rem] mb-[2rem] after:content-[' asdasd'] after:w-full after:block after:absolute after:bottom-[-0.4rem] after:border-[0.6rem] after:border-[#FF5C00] after:opacity-20 after:z-10">
                <b>
                  <span className="text-[#FF5C00]">
                    {newAnswerUser1[6].c_value}!
                  </span>
                  <br />
                  {newAnswerUser2[6].c_value}에게 이렇게 약속해줘요!
                </b>
              </div>
              <div className="leading-[3rem]">
                <div>
                  첫째, {newAnswerUser1[6].c_id === 1 ? "남편이" : "아내가"}{" "}
                  <b>{newAnswerUser2[3].c_value}</b>에면
                  <br />늘 곁에서 도우며 함께 하겠습니다.
                </div>
                <br />
                <div>
                  둘째, <b>{newAnswerUser2[4].c_value}</b>으로 고민하는
                  <br />
                  {newAnswerUser1[6].c_id === 1 ? "남편" : "아내"} 마음을
                  이해하고 함께 풀어가겠습니다.
                </div>
                <br />
                <div>
                  셋째, 언제나 아이에게 <b>{newAnswerUser2[5].c_value}</b>
                  <br />
                  {newAnswerUser1[6].c_id === 1 ? "엄마" : "아빠"}가 되겠습니다.
                </div>
              </div>
            </div>

            {/* user2 약속 */}
            <div className="mb-[4.8rem]">
              <div className="relative z-20 text-[2.2rem] mb-[2rem] after:content-[' asdasd'] after:w-full after:block after:absolute after:bottom-[-0.4rem] after:border-[0.6rem] after:border-[#FF5C00] after:opacity-20 after:z-10">
                <b>
                  <span className="text-[#FF5C00]">
                    {newAnswerUser2[6].c_value}!
                  </span>
                  <br />
                  {newAnswerUser1[6].c_value}에게 이렇게 약속해줘요!
                </b>
              </div>
              <div className="leading-[3rem]">
                <div>
                  첫째, {newAnswerUser2[6].c_id === 1 ? "남편이" : "아내가"}{" "}
                  <b>{newAnswerUser1[3].c_value}</b>에면
                  <br />늘 곁에서 도우며 함께 하겠습니다.
                </div>
                <br />
                <div>
                  둘째, <b>{newAnswerUser1[4].c_value}</b>으로 고민하는
                  <br />
                  {newAnswerUser2[6].c_id === 1 ? "남편" : "아내"} 마음을
                  이해하고 함께 풀어가겠습니다.
                </div>
                <br />
                <div>
                  셋째, 언제나 아이에게 <b>{newAnswerUser1[5].c_value}</b>
                  <br />
                  {newAnswerUser2[6].c_id === 1 ? "엄마" : "아빠"}가 되겠습니다.
                </div>
              </div>
            </div>

            {/* 아이 약속 */}
            <div className="mb-[7.8rem]">
              <div className="relative z-20 text-[2.2rem] mb-[2rem] after:content-[' asdasd'] after:w-full after:block after:absolute after:bottom-[-0.4rem] after:border-[0.6rem] after:border-[#FF5C00] after:opacity-20 after:z-10 ">
                <b>
                  <span className="text-[#FF5C00]">
                    나 {newAnswerUser1[7].sv || ""}!
                  </span>
                  <br />
                  엄마♥️아빠랑 이렇게 약속할게요!
                </b>
              </div>
              <div className="leading-[3rem]">
                <div>
                  하나, {newAnswerUser1[6].c_value}의{" "}
                  <b>{newAnswerUser1[1].c_value}</b>과{" "}
                  {newAnswerUser2[6].c_value}의{" "}
                  <b>{newAnswerUser2[1].c_value}</b>을<br />
                  배우고 닮아갈게요!
                </div>
                <br />
                <div>
                  둘,{" "}
                  <b>
                    {newAnswerUser2[2].c_value}과 {newAnswerUser1[2].c_value}
                  </b>{" "}
                  안에서 행복한 아이로 자랄게요!
                </div>
              </div>
            </div>

            <div className="text-center">{formattedDate}</div>
          </div>
        )}
      </div>
    </div>
  );
}
