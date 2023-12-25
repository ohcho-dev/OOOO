import { AnswerUser1, AnswerUser2, UserAnswerType } from "@/model/survey";
import { atom } from "recoil";

export const formStepState = atom({
  key: "formStepState",
  default: 0,
});

export const AnswerUser1State = atom({
  key: "AnswerUser1State",
  default: [] as AnswerUser1[],
});

export const AnswerUser2State = atom({
  key: "AnswerUser2State",
  default: [] as AnswerUser2[],
});
