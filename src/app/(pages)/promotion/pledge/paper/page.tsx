import Document from "@/components/document";
import Click from "@/components/ui/Lottie/Click";
import Letter from "@/components/ui/Lottie/Letter";
import { getUserSurvey } from "@/service/posts";
import Image from "next/image";

export default async function Page() {
  const survey1 = await getUserSurvey(1);
  const survey2 = await getUserSurvey(2);
  return (
    <div>
      {/* <Document survey1={survey1.survey} survey2={survey2.survey} /> */}
    </div>
  );
}
