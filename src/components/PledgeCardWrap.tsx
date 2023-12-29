import PledgeCard from "./PledgeCard";

interface PledgeCardWrapProps {
  name: string;
}
export default function PledgeCardWrap({ name }: PledgeCardWrapProps) {
  return (
    <div className="w-full overflow-auto scroll-m-0">
      <div className="pb-[5rem]">
        {!name ? <div>Loding...</div> : <PledgeCard name={name} />}
      </div>
    </div>
  );
}
