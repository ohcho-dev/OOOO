import { redirect } from "next/navigation";
import Script from "next/script";

export default async function ListPage() {
  redirect("/promotion/pledge");

  return (
    <section>
      <div>리스트 페이지</div>
    </section>
  );
}
