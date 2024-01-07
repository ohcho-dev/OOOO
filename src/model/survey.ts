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
  c_value?: string;
  sv?: string;
}
export interface SelectButtonType extends AnswerUser1 {
  s_id: number;
  c_id: number;
  type: string;
  sv?: string;
}
export interface AnswerUser2Type extends AnswerUser1 {}

export interface ResultDataType {
  user1_name: string;
  user1_gender: number;
  baby_name: string;
  user1_data: string;
  user2_data: string;
}

export interface ReviewDataType {
  page_id: number;
  contents: string;
}
