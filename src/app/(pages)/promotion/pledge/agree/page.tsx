import Toolbar from "@/components/toolbar";

export default function Page() {
  return (
    <section className="pt-[10rem] px-[5rem]">
      <Toolbar title="" />
      <div className="text-[2.1rem] font-bold">개인정보 수집 및 이용 동의</div>

      <div className="text-[1.5rem] mt-[1.5rem]">
        <div>
          본 서비스는 고객님의 개인정보를 중요시하며, “정보통신망 이용촉진 및
          정보보호 등에 관한 법률”을 준수하고 지키고 있습니다. <br />
          <br />본 서비스는 개인정보처리방침을 통하여 고객님께서 제공하시는
          개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해
          어떠한 조치가 취해지고 있는지 알려드립니다.
        </div>
        <div className="font-bold mt-[3.5rem]">
          1. 개인정보의 수집 및 이용 목적
        </div>
        <div className="">
          본 서비스는 수집된 개인 정보를 다음의 목적을 위해 활용합니다.
        </div>
        <ul>
          <li className="list-disc list-inside ml-[1rem]">
            육아응원 서약서 제작
          </li>
          <li className="list-disc list-inside ml-[1rem]">
            응답자 통계 및 결과 분석
          </li>
        </ul>
        <div className="mt-[1.5rem] font-bold">2. 수집하는 개인정보 항목</div>
        <ul>
          <li className="list-disc list-inside ml-[1rem]">
            필수 항목: 이름, 성별
          </li>
        </ul>
        <div className="mt-[1.5rem] font-bold">
          3. 개인정보의 보유 및 이용기간
        </div>
        <div>
          고객님의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면
          즉시 파기합니다.
        </div>
        <ul>
          <li className="list-disc list-inside ml-[1rem]">
            보유 및 이용 기간 : 입력일로부터 6개월까지
          </li>
        </ul>
        <div className="mt-[2.7rem] font-bold">
          동의를 거부할 권리가 있으며, 이 경우 서비스 이용에 제한을
          <br /> 받을 수 있습니다.
        </div>
      </div>
    </section>
  );
}
