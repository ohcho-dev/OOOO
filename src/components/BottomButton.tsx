"use client";

import { useRouter } from "next/navigation";

interface BottomButtonProps {
  label: string;
  status: boolean;
  onClick?: () => void;
  url?: string;
}
export default function BottomButton({
  onClick,
  url = "",
  label,
  status = false,
}: BottomButtonProps) {
  const router = useRouter();
  return (
    <button
      className={`w-[100vw] max-w-[518px] h-[8rem] text-[2.4rem] fixed bottom-0 ${
        status ? "bg-[#F9E9B3] text-black" : "bg-[#cccccc] text-white"
      }`}
      onClick={onClick ? onClick : () => router.push(url)}
      disabled={!status}
    >
      {label}
    </button>
  );
}
