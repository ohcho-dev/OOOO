import LZString from "lz-string";
import { AnswerUser1 } from "@/model/survey";
export default function DecompressedString(compressedData: string) {
  const decompressedData =
    LZString.decompressFromEncodedURIComponent(compressedData);
  const parsedData = JSON.parse(decompressedData) as AnswerUser1[];
  return parsedData;
}
