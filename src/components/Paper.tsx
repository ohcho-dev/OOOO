"use client";
import PledgeCardWrap from "@/components/PledgeCardWrap";
import { ResultDataType, SurveyListType } from "@/model/survey";
import { AnswerUser1State, AnswerUser2State } from "@/store/atom";
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
  return (
    <div>
      <div className="py-[1rem]">
        <Image
          className="mx-auto w-[12rem] "
          src="/logo.png"
          alt="육아응원"
          width={162}
          height={81}
        />
      </div>
      <div className="text-center text-[2.4rem] mt-[4rem]">
        <b>우리 가족 서약서</b>가 도착했어요!
      </div>
      <PledgeCardWrap name={data.baby_name} />
    </div>
  );
}
