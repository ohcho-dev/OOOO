"use client";

interface BottomButtonProps {
  label: string;
  status: boolean;
  onClick: () => void;
}
export default function BottomButton({
  onClick,
  label,
  status = false,
}: BottomButtonProps) {
  return (
    <button
      className={`w-[100vw] max-w-[518px] h-[8rem] text-[2.4rem] fixed bottom-0 ${
        status ? "bg-[#FFEBAA] text-black" : "bg-[#cccccc] text-white"
      }`}
      onClick={onClick}
      disabled={!status}
    >
      {label}
    </button>
  );
}
