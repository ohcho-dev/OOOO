import { getResultPage } from "@/app/api/pages";
import DocumentPage from "@/components/DocumentPage";
import { getUserSurvey } from "@/service/posts";
import { Metadata } from "next";
import { cache } from "react";

type Props = {
  params: { id: string };
};

const getPage = cache(async (id: string) => getResultPage(id));

export default async function Page({ params: { id } }: Props) {
  const survey1 = await getUserSurvey(1);
  const survey2 = await getUserSurvey(2);
  return (
    <DocumentPage id={id} survey1={survey1.survey} survey2={survey2.survey} />
  );
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const a = await getPage(id);

  return {
    openGraph: {
      title: "우리 가족 서약서가 도착했어요!!",
      description: "아이의 목소리를 담은 유쾌한 약속",
      images: [
        "https://oooo-pledge.s3.ap-northeast-2.amazonaws.com/image/meta_image_user_2.png",
      ],
      url: "https://oooo-pi.vercel.app/promotion/pledge/result2/" + id,
    },
  };
}
