import FormLayout2 from "@/components/FormLayout2";
import { getUserSurvey } from "@/service/posts";

export default async function FormFirstPage() {
  const survey = await getUserSurvey(2);

  return (
    <div className="overflow-x-hidden w-full relative h-[100svh] bg-[url('/bg.png')] bg-no-repeat bg-contain">
      {/* <a href="https://kr.freepik.com/free-photo/marshmallow-pink-baby-onesie-brush-pacifier-mil
k-bottle-and-toy-on-white-background_3196497.htm#query=%EC%9C%A1%EC%95%84%20%EC%9A%A9%ED%9
2%88&position=4&from_view=search&track=ais&uuid=4e27b0a9-b770-4194-a158-f9423d4ece00">Freepik</a> */}

      <FormLayout2 survey={survey.survey} />
    </div>
  );
}
