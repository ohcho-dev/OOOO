"use client";
import { todoListState } from "@/store/atom";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";

export default function FormFirstPage() {
  const router = useRouter();
  const todoList = useRecoilValue(todoListState);
  console.log(todoList);

  return (
    <div className="relative h-[100vh]">
      <div className="h-[30rem] bg-[#FFE695]">
        내가 생각하는 배우자의 모습을
        <br />
        아래에서 골라주세요.
      </div>
      <div className="w-[88%] h-[8rem] bg-white shadow-lg rounded-[3.5rem] p-[1rem] absolute top-[25rem] left-[50%] translate-x-[-50%]">
        <div>진행단계</div>
        <div>1 2 3 4 5 6 7</div>
      </div>
      <div className="mt-[8rem]">배우자 외모</div>
      <div className="">최대 3개까지 중복 선택이 가능합니다.</div>
      <button
        className="w-full bg-[#FFE695] h-[6rem] absolute bottom-0"
        onClick={() => router.push("/promotion/pledge/result")}
      >
        다음 단계
      </button>
    </div>
  );
}
