import SplitText from "@/util/SplitText";
import useTypingWords from "@/util/useTypingWords";
import Image from "next/image";
import { useEffect, useState } from "react";
interface PledgeCardBackProps {
  name: string;
  card: boolean;
}
export default function PledgeCardBack({ name, card }: PledgeCardBackProps) {
  let [finish, setFinish] = useState(false);

  useEffect(() => {
    if (card && !finish) {
      let timer = setTimeout(() => {
        setFinish((prev) => !prev);
      }, 4200);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [card, finish]);

  return (
    <>
      <div
        className={`relative w-[39rem] h-[62.4rem] mx-auto bg-[url(/flower_img.png)] bg-cover shadow-md rounded-[2rem]`}
      >
        {card && !finish && (
          <div
            className={`relative w-[39rem] h-[62.4rem] ${
              finish ? "" : "bg-[url(/flower_gif.gif)]"
            } bg-cover shadow-md rounded-[2rem]`}
          />
        )}
        {finish && (
          <div className="absolute top-[0] left-[0] w-full text-center">
            <div className="animate-[pledge1_2s_ease-in-out] mt-[6.9rem] text-[1.8rem]">
              {name}네 서약서
            </div>
            <div className="animate-[pledge2_2s_ease-in-out] mt-[3.3rem] text-[3rem]">
              <div>엄마 ♥️ 아빠</div>
              <div>함께 약속해요!</div>
            </div>
            <div className="animate-[pledge3_2s_ease-in-out] mt-[3.5rem] text-[2rem]">
              우리 가족은
              <br />
              화목한 가정을 만들기 위해
              <br />
              아래와 같이 서약합니다.
            </div>
            <div className="animate-[pledge4_2s_ease-in-out] mt-[6.4rem] text-[2rem]">
              배우자에게 공유하고
              <br />
              배우자의 서약서 작성이 완료되면
              <br />
              최종 서약서을 받을 수 있습니다.
            </div>
          </div>
        )}
      </div>
    </>
  );
}
