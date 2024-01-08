import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, delay: number | null): void => {
  const savedCallback = useRef<() => void>();

  // 최신 callback을 기억합니다.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // interval을 설정합니다.
  useEffect(() => {
    function tick() {
      savedCallback.current!();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
