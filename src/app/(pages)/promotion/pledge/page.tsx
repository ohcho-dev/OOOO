import { getResultCount, getResultPage } from "@/app/api/pages";
import PaperPage from "@/components/Paper";
import PledgeMainPage from "@/components/PledgeMainPage";
import { getUserSurvey } from "@/service/posts";
import { supabase } from "@/util/supabase";
import { Metadata } from "next";
import { cache } from "react";

type Props = {
  params: { id: string };
};

const getCount = cache(async () => getResultCount());

export default async function Page() {
  const data = await getCount();
  return <PledgeMainPage count={data.count} />;
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const a = await getCount();

  return {
    title: `육아응원 공동 서약서 ${id}`,
    description: `육아응원 공동 서약서 ${id}`,
  };
}
