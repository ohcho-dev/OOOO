import FormLayout2 from "@/components/FormLayout2";
import { getUserSurvey } from "@/service/posts";

export default async function FormFirstPage() {
  const survey = await getUserSurvey(2);

  return (
    <div className="overflow-x-hidden w-full relative h-[100svh] bg-[url('/bg.png')] bg-no-repeat bg-contain">
      <FormLayout2 survey={survey.survey} />
    </div>
  );
}
