"use client";

import Image from "next/image";

interface FormButtonProps {
  id: number;
  status: boolean;
  label: string;
  onClick: () => void;
}
export default function FormButton({
  id,
  status = false,
  label,
  onClick,
}: FormButtonProps) {
  return (
    <button
      className={`w-full border flex items-stretch gap-5 px-7 py-11 border-solid transition-all
      ${
        status
          ? "shadow-sm bg-red-100 rounded-[3rem] border-solid border-red-300"
          : "bg-neutral-100"
      }
    `}
      onClick={onClick}
    >
      <Image
        loading="lazy"
        src={`${status ? "/check_on.png" : "/check_off.png"}`}
        alt="checkbox"
        className="aspect-square object-contain object-center w-[3rem] fill-stone-300 overflow-hidden shrink-0 max-w-full"
        width={30}
        height={30}
      />
      <div className="text-neutral-600 text-[2.1rem] leading-[2.4rem] self-center my-auto">
        {label}
      </div>
    </button>
  );
}
