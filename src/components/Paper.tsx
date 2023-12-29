"use client";
import PledgeCardWrap from "@/components/PledgeCardWrap";
import Document from "@/components/document";
import Toolbar from "@/components/toolbar";
import { ResultDataType, SurveyListType } from "@/model/survey";
import { OpenModalState } from "@/store/atom";
import CustomBottomModal from "./CustomBottomModal";
import { useRecoilState } from "recoil";

interface PaperPageProps {
  data: ResultDataType;
  survey1: SurveyListType[];
  survey2: SurveyListType[];
}
export default function PaperPage({ data, survey1, survey2 }: PaperPageProps) {
  const [openModal, setOpenModal] = useRecoilState(OpenModalState);

  return (
    <div>
      <Toolbar />
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
