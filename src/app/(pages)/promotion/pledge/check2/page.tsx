import CheckForm2 from "@/components/CheckForm2";
import InfoToolbar from "@/components/InfoToolbar";
import { getUserSurvey } from "@/service/posts";

export default async function CheckPage() {
  const survey2 = await getUserSurvey(2);

  return (
    <div>
      <InfoToolbar title="최종 확인" />
      <CheckForm2 survey2={survey2.survey} />
    </div>
  );
}
