import reactDom from "react-dom";

type Props = {
  children: React.ReactNode;
};

export default function ModalPortal({ children }: Props) {
  // pc일 경우만 체크
  if (typeof window === "undefined") {
    return null;
  }

  const node = document.getElementById("portal") as Element;
  return reactDom.createPortal(children, node);
}
