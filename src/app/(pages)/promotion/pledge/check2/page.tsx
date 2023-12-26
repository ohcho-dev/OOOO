import CheckForm2 from "@/components/CheckForm2";
import Toolbar from "@/components/toolbar";
import { getUserSurvey } from "@/service/posts";

export default async function CheckPage() {
  const survey2 = await getUserSurvey(2);

  return (
    <div>
      <Toolbar />
      <CheckForm2 survey2={survey2.survey} />
    </div>
  );
}
