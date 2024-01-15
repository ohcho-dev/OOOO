"use client";

import { AnswerUser1, SurveyListType } from "@/model/survey";
import {
  AnswerUser1State,
  AnswerUser2State,
  CapturedDocumentState,
} from "@/store/atom";
import { getDate } from "@/util/getDateTime";
import useTypingWords from "@/util/useTypingWords";
import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
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

  const elementRef = useRef<HTMLDivElement>(null);
  const today = new Date();
  const formattedDate = `${today.getFullYear()}/${
    today.getMonth() + 1
  }/${today.getDate()}`;
  const [capturedDocument, setCapturedDocument] = useRecoilState(
    CapturedDocumentState
  );

  useEffect(() => {
    if (elementRef.current && newAnswerUser1 && newAnswerUser2) {
      captureElement();
    }
  }, [elementRef, newAnswerUser1, newAnswerUser2]);

  const captureElement = async () => {
    const element = elementRef.current;

    if (element) {
      const canvas = await html2canvas(element);
      const imageDataUrl = canvas.toDataURL("image/png");
      setCapturedDocument(imageDataUrl);
    }
  };

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

  if (
    newAnswerUser1.length < 7 ||
    newAnswerUser2.length < 6 ||
    !newAnswerUser1[7].sv
  )
    return <div>Loading...</div>;

  return (
    <div className="relative overflow-y-scroll overflow-x-hidden w-[52rem] h-[100dvh] max-h-calcDocumentPage text-[2rem] leading-[2.8rem]">
      <div
        ref={elementRef}
        className="absolute top-[0] z-10 bg-[url(/paper_bg.webp)] w-[52rem] h-[190.7rem] bg-cover bg-center p-[3rem] leading-[2.8rem]"
      >
        {/* 출처 <a href="https://kr.freepik.com/free-vector/hand-drawn-doodle-pattern_31194738.htm#query=baby%20pattern&position=1&from_view=search&track=ais&uuid=3e5c0b1c-f6b4-4c54-b071-1a01d40423dc">Freepik</a> */}
        {/* 출처 <a href="https://kr.freepik.com/free-vector/pack-of-hand-drawn-baby-items_978632.htm#query=toy%20line&position=13&from_view=search&track=ais&uuid=05ca6458-5159-4250-b46d-6b267a0e120d">Freepik</a> */}
        {/* <a href="https://kr.freepik.com/free-vector/father-mother-backpacking-to-take-her-daughter-out-for-a-trip_13575796.htm#page=3&query=%EA%B0%80%EC%A1%B1&position=36&from_view=search&track=sph&uuid=c75d9118-9140-4932-a5b6-dcd7e648cfbd">작가 jcomp</a> 출처 Freepik */}
        <div className="text-[2rem] font-bold pt-[5.8rem] ml-[6.7rem]">
          {newAnswerUser1[7]?.sv}네 서약서
        </div>
        <div className="text-[2.8rem] leading-[4rem] mt-[0.9rem] ml-[6.7rem]">
          엄마 ♥️ 아빠!
          <br />
          함께 약속해요!
        </div>
        <div className="text-center">
          {/* 세상에서 가장 ~~한 우리 ~~ */}
          <div className="mt-[20.4rem] text-[2.2rem] font-bold leading-[3.6rem]">
            <div>
              <span className="bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]">
                {newAnswerUser1[0].c_value}{" "}
              </span>
              우리 {newAnswerUser2[6].c_value} {newAnswerUser2[6].sv || ""}
            </div>
            <div>
              <span className="bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]">
                {newAnswerUser2[0].c_value}{" "}
              </span>
              우리 {newAnswerUser1[6].c_value} {newAnswerUser1[6].sv || ""}
            </div>
            <div>
              <span className="bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]">
                세상에 하나뿐인{" "}
              </span>
              {newAnswerUser1[7].c_value} {newAnswerUser1[7].sv || ""}
            </div>
          </div>

          {/* 우리 가족은 서약합니다 */}
          <div className="mt-[3.5rem] text-[2rem]">
            우리 가족은{" "}
            <b className="text-[#F65B5B]">
              {newAnswerUser2[2].c_value !== newAnswerUser1[2].c_value
                ? `${newAnswerUser2[2].c_value}과 ${newAnswerUser1[2].c_value}`
                : `${newAnswerUser1[2].c_value}`}
            </b>
            이 넘치는 화목한 가정을
            <br />
            만들기 위해 아래와 같이 서약합니다.
          </div>

          {/* user1 약속 */}
          <div className="mt-[4rem]">
            <div className="text-[2.2rem]">
              <b>
                <span className="text-[#F25D24] text-[3rem]">
                  {newAnswerUser1[6].c_value}!
                </span>
                <br />
                <div className="mt-[2.3rem]">
                  {newAnswerUser2[6].c_value}에게 이렇게 약속해줘요!
                </div>
              </b>
            </div>
            <div className="leading-[3rem] text-[2rem] mt-[4.3rem]">
              <div>
                첫째, {newAnswerUser1[6].c_id === 1 ? "남편이" : "아내가"}{" "}
                <b>{newAnswerUser2[3].c_value}</b>에면
                <br />늘 곁에서 도우며 함께 하겠습니다.
              </div>
              <br />
              <div>
                둘째, <b>{newAnswerUser2[4].c_value}</b>으로 고민하는
                <br />
                {newAnswerUser1[6].c_id === 1 ? "남편" : "아내"} 마음을 이해하고
                함께 풀어가겠습니다.
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
          <div className="mt-[5.3rem]">
            <div className="text-[2.2rem]">
              <b>
                <span className="text-[#F25D24] text-[3rem]">
                  {newAnswerUser2[6].c_value}!
                </span>
                <br />
                <div className="mt-[2.5rem]">
                  {newAnswerUser1[6].c_value}에게 이렇게 약속해줘요!
                </div>
              </b>
            </div>
            <div className="leading-[3rem] text-[2rem] mt-[4.3rem]">
              <div>
                첫째, {newAnswerUser2[6].c_id === 1 ? "남편이" : "아내가"}{" "}
                <b>{newAnswerUser1[3].c_value}</b>에면
                <br />늘 곁에서 도우며 함께 하겠습니다.
              </div>
              <br />
              <div>
                둘째, <b>{newAnswerUser1[4].c_value}</b>으로 고민하는
                <br />
                {newAnswerUser2[6].c_id === 1 ? "남편" : "아내"} 마음을 이해하고
                함께 풀어가겠습니다.
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
          <div className="mt-[3.9rem]">
            <div className="text-[2.2rem]">
              <b>
                <span className="text-[#F25D24] text-[3rem]">
                  나 {newAnswerUser1[7].sv || ""}!
                </span>
                <br />
                <div className="mt-[2.5rem]">
                  엄마♥️아빠랑 이렇게 약속할게요!
                </div>
              </b>
            </div>
            <div className="leading-[3rem] text-[2rem] mt-[4.3rem]">
              <div>
                하나, {newAnswerUser1[6].c_value}의{" "}
                <b>{newAnswerUser1[1].c_value}</b>과 {newAnswerUser2[6].c_value}
                의 <b>{newAnswerUser2[1].c_value}</b>을<br />
                배우고 닮아갈게요!
              </div>
              <br />
              <div>
                둘,{" "}
                <b>
                  {newAnswerUser1[2].c_value !== newAnswerUser2[2].c_value
                    ? `${newAnswerUser2[2].c_value}과 ${newAnswerUser1[2].c_value}`
                    : newAnswerUser2[2].c_value}
                </b>{" "}
                안에서 행복한 아이로 자랄게요!
              </div>
            </div>
          </div>
          <div className="text-center mt-[8rem] text-[2rem]">
            {getDate(formattedDate)}
          </div>
        </div>
      </div>
      <div className="absolute top-[0] z-20 bg-[url(/paper_bg.webp)] w-[52rem] h-[190.7rem] bg-cover bg-center p-[3rem] leading-[2.8rem]">
        {/* 출처 <a href="https://kr.freepik.com/free-vector/hand-drawn-doodle-pattern_31194738.htm#query=baby%20pattern&position=1&from_view=search&track=ais&uuid=3e5c0b1c-f6b4-4c54-b071-1a01d40423dc">Freepik</a> */}
        {/* 출처 <a href="https://kr.freepik.com/free-vector/pack-of-hand-drawn-baby-items_978632.htm#query=toy%20line&position=13&from_view=search&track=ais&uuid=05ca6458-5159-4250-b46d-6b267a0e120d">Freepik</a> */}
        {/* <a href="https://kr.freepik.com/free-vector/father-mother-backpacking-to-take-her-daughter-out-for-a-trip_13575796.htm#page=3&query=%EA%B0%80%EC%A1%B1&position=36&from_view=search&track=sph&uuid=c75d9118-9140-4932-a5b6-dcd7e648cfbd">작가 jcomp</a> 출처 Freepik */}
        <div className="text-[2rem] font-bold pt-[5.8rem] ml-[6.7rem]">
          {newAnswerUser1[7]?.sv}네 서약서
        </div>
        <div className="text-[2.8rem] leading-[4rem] mt-[0.9rem] ml-[6.7rem]">
          엄마 ♥️ 아빠!
          <br />
          함께 약속해요!
        </div>
        <div className="text-center">
          {/* 세상에서 가장 ~~한 우리 ~~ */}
          <div className="mt-[20.4rem] text-[2.2rem] font-bold leading-[3.6rem]">
            <div>
              <span className="bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]">
                {newAnswerUser1[0].c_value}{" "}
              </span>
              우리 {newAnswerUser2[6].c_value} {newAnswerUser2[6].sv || ""}
            </div>
            <div>
              <span className="bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]">
                {newAnswerUser2[0].c_value}{" "}
              </span>
              우리 {newAnswerUser1[6].c_value} {newAnswerUser1[6].sv || ""}
            </div>
            <div>
              <span className="bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]">
                세상에 하나뿐인{" "}
              </span>
              {newAnswerUser1[7].c_value} {newAnswerUser1[7].sv || ""}
            </div>
          </div>

          {/* 우리 가족은 서약합니다 */}
          <div className="mt-[3.5rem] text-[2rem]">
            우리 가족은{" "}
            <b className="text-[#F65B5B]">
              {newAnswerUser2[2].c_value !== newAnswerUser1[2].c_value
                ? `${newAnswerUser2[2].c_value}과 ${newAnswerUser1[2].c_value}`
                : `${newAnswerUser1[2].c_value}`}
            </b>
            이 넘치는 화목한 가정을
            <br />
            만들기 위해 아래와 같이 서약합니다.
          </div>

          {/* user1 약속 */}
          <div className="mt-[5.1rem]">
            <div className="text-[2.2rem]">
              <b>
                <span className="text-[#F25D24] text-[3rem]">
                  {newAnswerUser1[6].c_value}!
                </span>
                <br />
                <div className="mt-[2.3rem]">
                  {newAnswerUser2[6].c_value}에게 이렇게 약속해줘요!
                </div>
              </b>
            </div>
            <div className="leading-[3rem] text-[2rem] mt-[4.3rem]">
              <div>
                첫째, {newAnswerUser1[6].c_id === 1 ? "남편이" : "아내가"}{" "}
                <b>{newAnswerUser2[3].c_value}</b>에면
                <br />늘 곁에서 도우며 함께 하겠습니다.
              </div>
              <br />
              <div>
                둘째, <b>{newAnswerUser2[4].c_value}</b>으로 고민하는
                <br />
                {newAnswerUser1[6].c_id === 1 ? "남편" : "아내"} 마음을 이해하고
                함께 풀어가겠습니다.
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
          <div className="mt-[5.3rem]">
            <div className="text-[2.2rem]">
              <b>
                <span className="text-[#F25D24] text-[3rem]">
                  {newAnswerUser2[6].c_value}!
                </span>
                <br />
                <div className="mt-[2.5rem]">
                  {newAnswerUser1[6].c_value}에게 이렇게 약속해줘요!
                </div>
              </b>
            </div>
            <div className="leading-[3rem] text-[2rem] mt-[4.3rem]">
              <div>
                첫째, {newAnswerUser2[6].c_id === 1 ? "남편이" : "아내가"}{" "}
                <b>{newAnswerUser1[3].c_value}</b>에면
                <br />늘 곁에서 도우며 함께 하겠습니다.
              </div>
              <br />
              <div>
                둘째, <b>{newAnswerUser1[4].c_value}</b>으로 고민하는
                <br />
                {newAnswerUser2[6].c_id === 1 ? "남편" : "아내"} 마음을 이해하고
                함께 풀어가겠습니다.
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
          <div className="mt-[3.9rem]">
            <div className="text-[2.2rem]">
              <b>
                <span className="text-[#F25D24] text-[3rem]">
                  나 {newAnswerUser1[7].sv || ""}!
                </span>
                <br />
                <div className="mt-[2.5rem]">
                  엄마♥️아빠랑 이렇게 약속할게요!
                </div>
              </b>
            </div>
            <div className="leading-[3rem] text-[2rem] mt-[4.3rem]">
              <div>
                하나, {newAnswerUser1[6].c_value}의{" "}
                <b>{newAnswerUser1[1].c_value}</b>과 {newAnswerUser2[6].c_value}
                의 <b>{newAnswerUser2[1].c_value}</b>을<br />
                배우고 닮아갈게요!
              </div>
              <br />
              <div>
                둘,{" "}
                <b>
                  {newAnswerUser1[2].c_value !== newAnswerUser2[2].c_value
                    ? `${newAnswerUser2[2].c_value}과 ${newAnswerUser1[2].c_value}`
                    : newAnswerUser2[2].c_value}
                </b>{" "}
                안에서 행복한 아이로 자랄게요!
              </div>
            </div>
          </div>
          <div className="text-center mt-[8rem] text-[2rem]">
            {getDate(formattedDate)}
          </div>
        </div>
      </div>
    </div>
  );
}
