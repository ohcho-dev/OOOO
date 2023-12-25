import FormLayout from "@/components/FormLayout";
import { SurveyType } from "@/model/survey";
import { promises as fs } from "fs";
// import { todoListState } from "@/store/atom";
// import { useRecoilValue } from "recoil";

export default async function FormFirstPage() {
  const file = await fs.readFile(process.cwd() + "/src/data/data.json", "utf8");
  const { survey }: SurveyType = JSON.parse(file);

  return (
    <div className="w-full relative h-[100svh] bg-[url('/bg.png')] bg-no-repeat bg-contain">
      <FormLayout survey={survey} />
    </div>
  );
}
