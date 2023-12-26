export interface SurveyType {
  survey: SurveyListType[];
}
export interface SurveyListType {
  id: number;
  overlap: boolean;
  type: string;
  choiceQuestion: string;
  choiceAnswer: AnswerItemTypes[];
  subjectQuestion?: string;
  grid: number;
}

export interface AnswerItemTypes {
  answer_id: number;
  answer_value: string;
}

export interface UserAnswerType {
  user_1: AnswerUser1[];
  user_2: AnswerUser2Type[];
}
export interface AnswerUser1 {
  s_id: number;
  c_id: number;
  sv?: string;
}
export interface SelectButtonType extends AnswerUser1 {
  s_id: number;
  c_id: number;
  type: string;
  sv?: string;
}
export interface AnswerUser2Type extends AnswerUser1 {}
