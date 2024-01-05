import CheckForm from "@/components/CheckForm";
import InfoToolbar from "@/components/InfoToolbar";
import { getUserSurvey } from "@/service/posts";

export default async function CheckPage() {
  const survey1 = await getUserSurvey(1);

  return (
    <div>
      <InfoToolbar title="최종 확인" />
      <CheckForm survey1={survey1.survey} />
    </div>
  );
}
