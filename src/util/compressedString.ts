import LZString from "lz-string";
import { AnswerUser1 } from "@/model/survey";

export default function CompressedString(answerFirst: AnswerUser1[]) {
  const json = JSON.stringify(answerFirst);
  const compressedData = LZString.compressToEncodedURIComponent(json);
  return compressedData;
}
