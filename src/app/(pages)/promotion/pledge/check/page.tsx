import CheckForm from "@/components/CheckForm";
import Toolbar from "@/components/toolbar";
import { getUserSurvey } from "@/service/posts";

export default async function CheckPage() {
  const survey1 = await getUserSurvey(1);

  return (
    <div>
      <Toolbar />
      <CheckForm survey1={survey1.survey} />
    </div>
  );
}
