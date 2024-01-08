"use client";
import Document from "@/components/document";
import { ResultDataType, SurveyListType } from "@/model/survey";
import BottomButton from "./BottomButton";
import { useRouter } from "next/navigation";
import InfoToolbar from "./InfoToolbar";

interface DocumentPageProps {
  id: string;
  survey1: SurveyListType[];
  survey2: SurveyListType[];
}
export default function DocumentPage({
  id,
  survey1,
  survey2,
}: DocumentPageProps) {
  const router = useRouter();
  return (
    <div>
      <InfoToolbar title="서약서" />
      <div className="w-full h-[6.7rem] " />
      <Document survey1={survey1} survey2={survey2} />
      <BottomButton
        label="서약서를 소장하고 싶다면?"
        status={true}
        onClick={() => router.push(`/promotion/pledge/result2/${id}/guide`)}
      />
    </div>
  );
}
