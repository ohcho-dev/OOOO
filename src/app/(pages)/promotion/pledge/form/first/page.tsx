"use client";
import { todoListState } from "@/store/atom";
import { useRecoilValue } from "recoil";

export default function FormFirstPage() {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList);
  return (
    <div>
      <div>첫번째 폼 작성페이지</div>
    </div>
  );
}
