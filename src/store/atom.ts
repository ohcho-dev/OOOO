import { atom } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [1, 2, 3],
});
