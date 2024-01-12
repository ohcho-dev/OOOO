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
    openGraph: {
      title: "우리 가족 서약서 : 키워드 입력만으로 소중한 서약서 만들기️❤️",
      description: "아이의 목소리를 담은 유쾌한 약속",
      images: [
        "https://oooo-pledge.s3.ap-northeast-2.amazonaws.com/image/meta_image_user_2.png",
      ],
      url: "https://oooo-pi.vercel.app/promotion/pledge",
    },
  };
}
