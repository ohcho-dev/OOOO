import { redirect } from "next/navigation";

export default async function HomePage() {
  redirect("/promotion/pledge");

  return (
    <section>
      <div>육아응원 소개 페이지</div>
    </section>
  );
}
