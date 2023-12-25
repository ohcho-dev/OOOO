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
  user_2: AnswerUser2[];
}
export interface AnswerUser1 {
  survey_id: number;
  choice_id: number;
  subject_value?: string;
}
export interface SelectButtonType extends AnswerUser1 {
  survey_id: number;
  choice_id: number;
  type: string;
  subject_value?: string;
}
export interface AnswerUser2 extends AnswerUser1 {}
