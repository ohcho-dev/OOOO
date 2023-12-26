import FormLayout2 from "@/components/FormLayout2";
import { SurveyType } from "@/model/survey";
import { promises as fs } from "fs";

export default async function FormFirstPage() {
  const file = await fs.readFile(
    process.cwd() + "/src/data/data2.json",
    "utf8"
  );
  const { survey }: SurveyType = JSON.parse(file);

  return (
    <div className="overflow-x-hidden w-full relative h-[100svh] bg-[url('/bg.png')] bg-no-repeat bg-contain">
      <FormLayout2 survey={survey} />
    </div>
  );
}
