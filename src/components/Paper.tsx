import PledgeCardWrap from "@/components/PledgeCardWrap";
import Document from "@/components/document";
import Toolbar from "@/components/toolbar";
import { ResultDataType } from "@/model/survey";
import { getUserSurvey } from "@/service/posts";

interface PaperPageProps {
  data: ResultDataType;
}
export default async function PaperPage({ data }: PaperPageProps) {
  return (
    <div>
      <Toolbar />
      <PledgeCardWrap name={data.baby_name} />
      {/* <Document
        survey1={JSON.parse(data.user1_data)}
        survey2={JSON.parse(data.user2_data)}
      /> */}
    </div>
  );
}
