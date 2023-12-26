import { SurveyType } from "@/model/survey";
import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

// fetch를 사용할 경우 자동으로 중복제거 되어 한번만 요청하지만, 다른 방법은 자동 중복제거가 안됨 (캐시 사용)
export const getUserSurvey = cache(async (user: number) => {
  const filePath = path.join(process.cwd(), "/src/data/", `data${user}.json`);
  return readFile(filePath, "utf8").then<SurveyType>((data) =>
    JSON.parse(data)
  );
});
