"use client";
import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import GIF from "gif.js";

const LetterPage: React.FC = () => {
  const captureRef = useRef<HTMLDivElement | null>(null);
  const gifRef = useRef<any>(null);
  const [animating, setAnimating] = useState<boolean>(false);
  const [isRendering, setIsRendering] = useState<boolean>(false);

  useEffect(() => {}, []);

  useEffect(() => {
    console.log(captureRef.current, animating);
    const gif = new GIF({
      workers: 2,
      quality: 10,
      width: 500,
      height: 300,
    });
    if (captureRef.current && animating) {
      for (let i = 0; i < 50; i++) {
        html2canvas(captureRef.current).then((canvas) => {
          gif.addFrame(canvas, { copy: true, delay: 200 });
        });
      }
    }

    gifRef.current = gif;
  }, [animating]);
  console.log(gifRef.current);
  // useEffect(() => {
  //   const gif = new GIF({
  //     workers: 2,
  //     quality: 10,
  //     width: 500,
  //     height: 300,
  //   });
  //   gifRef.current = gif;

  //   let intervalId: NodeJS.Timeout | undefined;
  //   if (animating) {
  //     intervalId = setInterval(() => {
  //       if (captureRef.current) {
  //         html2canvas(captureRef.current).then((canvas) => {
  //           gif.addFrame(canvas, { copy: true, delay: 200 });
  //         });
  //       }
  //     }, 2000);
  //   }

  //   return () => {
  //     if (intervalId) {
  //       clearInterval(intervalId);
  //     }
  //   };
  // }, [animating]);

  const handleStartAnimation = () => {
    setAnimating(true);
  };

  const handleEndAnimation = () => {
    setAnimating(false);
  };

  const handleSaveGif = () => {
    if (isRendering) {
      return;
    }

    setIsRendering(true);

    gifRef.current.on("finished", (blob: Blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "animation.gif";
      link.click();
      setIsRendering(false);
    });
  };

  console.log(gifRef.current);
  return (
    <div>
      <div ref={captureRef}>
        <div
          className={
            animating ? "animate-[wiggle_1s_ease-in-out] border h-32" : "h-32"
          }
        >
          123123
        </div>
      </div>
      <button onClick={handleStartAnimation}>애니메이션 시작</button>
      <button onClick={handleEndAnimation}>애니메이션 끝</button>
      <button onClick={handleSaveGif}>GIF 저장하기</button>
    </div>
  );
};

export default LetterPage;
