import Link from "next/link";

export default async function PledgeMainPage() {
  return (
    <section>
      <div>엽서 메인 소개 페이지</div>
      <Link href="/promotion/pledge/form">엽서 만들기</Link>
    </section>
  );
}
