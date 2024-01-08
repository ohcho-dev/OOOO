import { AnswerUser1, AnswerUser2Type } from "@/model/survey";
import { atom } from "recoil";

export const infoStepState = atom({
  key: "infoStepState",
  default: 0 as number,
});
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
  default: [] as AnswerUser2Type[],
});

export const OpenModalState = atom({
  key: "OpenModalState",
  default: false as boolean,
});

export const OpenToastState = atom({
  key: "OpenToastState",
  default: false as boolean,
});

export const CapturedCardState = atom({
  key: "CapturedCardState",
  default: "",
});

export const CapturedDocumentState = atom({
  key: "CapturedDocumentState",
  default: "",
});

export const AnswerMood1State = atom({
  key: "AnswerMood1State",
  default: "" as string,
});
export const AnswerMood2State = atom({
  key: "AnswerMood2State",
  default: "" as string,
});
export const AnswerUser1MoodState = atom({
  key: "AnswerUser1MoodState",
  default: "" as string,
});
export const AnswerUser2MoodState = atom({
  key: "AnswerUser2MoodState",
  default: "" as string,
});
