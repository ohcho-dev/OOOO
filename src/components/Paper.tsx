"use client";
import PledgeCardWrap from "@/components/PledgeCardWrap";
import Document from "@/components/document";
import Toolbar from "@/components/toolbar";
import { ResultDataType, SurveyListType } from "@/model/survey";
import {
  AnswerUser1State,
  AnswerUser2State,
  OpenModalState,
} from "@/store/atom";
import CustomBottomModal from "./CustomBottomModal";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import Image from "next/image";

interface PaperPageProps {
  data: ResultDataType;
  survey1: SurveyListType[];
  survey2: SurveyListType[];
}
export default function PaperPage({ data, survey1, survey2 }: PaperPageProps) {
  const [openModal, setOpenModal] = useRecoilState(OpenModalState);
  const [answerUser1, setAnswerUser1] = useRecoilState(AnswerUser1State);
  const [answerUser2, setAnswerUser2] = useRecoilState(AnswerUser2State);

  useEffect(() => {
    if (data) {
      setAnswerUser1(JSON.parse(data.user1_data));
      setAnswerUser2(JSON.parse(data.user2_data));
    }
  }, [data]);

  return (
    <div>
      <Image
        className="mx-auto w-[12rem] my-[1rem]"
        src="/logo.png"
        alt="육아응원"
        width={162}
        height={81}
      />
      <PledgeCardWrap name={data.baby_name} />

      {openModal && (
        <CustomBottomModal
          toggle={openModal}
          handleToggle={() => setOpenModal(false)}
        >
          <Document survey1={survey1} survey2={survey2} />
        </CustomBottomModal>
      )}
    </div>
  );
}
