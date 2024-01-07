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
  const data = await getPage(id);
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
    title: `육아응원 가족 서약서 ${id}`,
    description: `육아응원 가족 서약서 ${id}`,
  };
}
