import { redirect } from "next/navigation";

export default function Page() {
  redirect("/promotion/pledge/form/first");
  return <div>엽서 만들기 질문 답변 페이지</div>;
}
