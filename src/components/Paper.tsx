"use client";
import PledgeCardWrap from "@/components/PledgeCardWrap";
import { ResultDataType, SurveyListType } from "@/model/survey";
import {
  AnswerBabyNameState,
  AnswerMood1State,
  AnswerMood2State,
  AnswerUser1MoodState,
  AnswerUser1NameState,
  AnswerUser1State,
  AnswerUser2MoodState,
  AnswerUser2NameState,
  AnswerUser2State,
} from "@/store/atom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import Image from "next/image";

interface PaperPageProps {
  data: ResultDataType;
  survey1: SurveyListType[];
  survey2: SurveyListType[];
}
export default function PaperPage({ data, survey1, survey2 }: PaperPageProps) {
  const [url, setUrl] = useState("");
  const [count, setCount] = useState(0);
  const [answerUser1, setAnswerUser1] = useRecoilState(AnswerUser1State);
  const [answerUser2, setAnswerUser2] = useRecoilState(AnswerUser2State);
  const [answerMood1, setAnswerMood1] = useRecoilState(AnswerMood1State);
  const [answerMood2, setAnswerMood2] = useRecoilState(AnswerMood2State);
  const [answerUser1Mood, setAnswerUser1Mood] =
    useRecoilState(AnswerUser1MoodState);
  const [answerUser2Mood, setAnswerUser2Mood] =
    useRecoilState(AnswerUser2MoodState);
  const [answerUser1Name, setAnswerUser1Name] =
    useRecoilState(AnswerUser1NameState);
  const [answerUser2Name, setAnswerUser2Name] =
    useRecoilState(AnswerUser2NameState);
  const [answerBabyName, setAnswerBabyName] =
    useRecoilState(AnswerBabyNameState);

  useEffect(() => {
    const url = window?.location.href;
    setUrl(url);

    const timer = setInterval(() => {
      setCount(1);
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (data) {
      setAnswerUser1(JSON.parse(data.user1_data));
      setAnswerUser2(JSON.parse(data.user2_data));
    }
  }, [data]);

  useEffect(() => {
    if (answerUser1[2]?.c_id) {
      const answerArray = survey1[2].choiceAnswer;
      const text = answerArray.filter(
        (item) => item.answer_id === answerUser1[2].c_id
      )[0].answer_value;
      setAnswerMood1(text);
    }
    if (answerUser2[2]?.c_id) {
      const answerArray = survey2[2].choiceAnswer;
      const text = answerArray.filter(
        (item) => item.answer_id === answerUser2[2].c_id
      )[0].answer_value;
      setAnswerMood2(text);
    }
    if (answerUser1[0]?.c_id) {
      const answerArray = survey1[0].choiceAnswer;
      const text = answerArray.filter(
        (item) => item.answer_id === answerUser1[0].c_id
      )[0].answer_value;
      setAnswerUser1Mood(text);
    }
    if (answerUser2[0]?.c_id) {
      const answerArray = survey2[0].choiceAnswer;
      const text = answerArray.filter(
        (item) => item.answer_id === answerUser2[0].c_id
      )[0].answer_value;
      setAnswerUser2Mood(text);
    }
    if (answerUser1[6]?.c_id && answerUser1[6]?.sv) {
      const answerArray = survey1[6].choiceAnswer;
      const text = answerArray.filter(
        (item) => item.answer_id === answerUser1[6].c_id
      )[0].answer_value;
      setAnswerUser1Name({
        gender: text,
        name: answerUser1[6].sv,
      });
    }
    if (answerUser2[6]?.c_id && answerUser2[6]?.sv) {
      const answerArray = survey2[6].choiceAnswer;
      const text = answerArray.filter(
        (item) => item.answer_id === answerUser2[6].c_id
      )[0].answer_value;
      setAnswerUser2Name({
        gender: text,
        name: answerUser2[6].sv,
      });
    }
    if (answerUser1[7]?.c_id && answerUser1[7]?.sv) {
      const answerArray = survey1[7].choiceAnswer;
      const text = answerArray.filter(
        (item) => item.answer_id === answerUser1[7].c_id
      )[0].answer_value;
      setAnswerBabyName({
        gender: text,
        name: answerUser1[7].sv,
      });
    }
  }, [answerUser1, answerUser2]);

  return (
    <div>
      <div className="py-[1rem]">
        <Image
          className="mx-auto w-[12rem] "
          src="/logo.webp"
          alt="육아응원"
          width={162}
          height={81}
        />
      </div>
      <div className="text-center text-[2.4rem] mt-[4rem]">
        <b>우리 가족 서약서</b>가 도착했어요!
      </div>
      {(!answerMood1 ||
        !answerMood2 ||
        !answerUser1Mood ||
        !answerUser2Mood) && (
        <div className="text-[2rem] text-center">Loading...</div>
      )}
      {answerMood1 && answerMood2 && answerUser1Mood && answerUser2Mood && (
        <PledgeCardWrap name={data.baby_name} />
      )}
    </div>
  );
}
