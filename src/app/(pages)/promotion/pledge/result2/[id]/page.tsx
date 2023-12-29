import { getResultPage } from "@/app/api/pages";
import PaperPage from "@/components/Paper";
import { supabase } from "@/util/supabase";
import { Metadata } from "next";
import { cache } from "react";

type Props = {
  params: { id: string };
};

const getPage = cache(async (id: string) => getResultPage(id));

export default async function Page({ params: { id } }: Props) {
  const data = await getPage(id);
  console.log(data);
  return <PaperPage data={data.data} />;
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const a = await getPage(id);

  return {
    title: `육아응원 공동 서약서 ${id}`,
    description: `육아응원 공동 서약서 ${id}`,
  };
}
