import FormLayout from "@/components/FormLayout";
import { getUserSurvey } from "@/service/posts";

export default async function FormFirstPage() {
  const survey = await getUserSurvey(1);

  return (
    <div className="overflow-x-hidden w-full relative h-[100svh] bg-[url('/bg.png')] bg-no-repeat bg-contain">
      <FormLayout survey={survey.survey} />
    </div>
  );
}
