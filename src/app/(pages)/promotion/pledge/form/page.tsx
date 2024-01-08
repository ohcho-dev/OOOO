import BottomButton from "@/components/BottomButton";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <h1 className="pt-[11.6rem] text-center text-[2.8rem]">
        <b>
          내가 생각하는 <span className="text-[#FFD3D0]">배우자의 모습</span>을
        </b>
        <br /> 아래 선택지에서 골라주세요.
      </h1>
      <Image
        className="mx-auto mt-[6.9rem] w-[33.1rem] h-[33.7rem]"
        src="/info1.png"
        alt="mock-up"
        width={331}
        height={337}
      />

      <span className="block mt-[7.2rem] text-center text-[2.1rem]">
        아래 항목중 가장 비슷한 항목을 선택해주세요.
      </span>

      <BottomButton
        label="확인하였습니다"
        url="/promotion/pledge/form/first"
        status={true}
      />
    </div>
  );
}
