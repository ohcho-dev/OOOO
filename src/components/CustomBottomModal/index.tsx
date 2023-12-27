import React, { ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useRouter } from "next/navigation";

interface CustomBottomModalProps {
  toggle: boolean;
  handleToggle: () => void;
  children?: ReactNode;
}

const BottomSheetModalPortal = ({ children }: { children: ReactNode }) => {
  const el = document.getElementById("body");
  return el && ReactDOM.createPortal(children, el);
};

const CustomBottomModal: React.FC<CustomBottomModalProps> = ({
  toggle,
  handleToggle,
  children,
}) => {
  // 뒤로가기 제어
  const router = useRouter();
  const popStateRef = useRef<boolean>(false);
  useEffect(() => {
    // 개발 환경에서는 strict mode로 인해 렌더링이 2번 진행됨에 따라 뒤로가기를 2번 해야함.
    // 배포 환경에서는 이상 없음.
    popStateRef.current = false;
    if (toggle) {
      document.getElementById("main")?.classList.add("scroll_lock");
      window.onpopstate = () => {
        // 뒤로가기가 실행될 경우 추가 action 등록
        popStateRef.current = true;
        handleToggle();
        return () => {
          document.getElementById("main")?.classList.remove("scroll_lock");
          router.back();
        };
      };
    }
  }, [toggle]);

  return (
    <>
      {toggle && (
        <div className="fixed top-0 left-0 w-full h-[100svh] z-10">
          <div
            className="w-full h-[100svh] bg-black opacity-70 transition-all animate-[handleFade_0.2_linear_laternate]"
            onClick={() => handleToggle()}
          />
          <div className="w-[100vw] max-w-[52rem] bg-white absolute bottom-0 left-[50%] translate-x-[-50%] rounded-t-[3rem] fadein-moveTop">
            {children}
          </div>
        </div>
      )}
    </>
  );
};
export default CustomBottomModal;
