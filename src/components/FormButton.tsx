"use client";

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
      className={`border flex items-stretch gap-5 px-7 py-11 border-solid transition-all
      ${
        status
          ? "shadow-sm bg-red-100 rounded-[3rem] border-solid border-red-300"
          : "bg-neutral-100"
      }
    `}
      onClick={onClick}
    >
      <img
        loading="lazy"
        src={`${status ? "/check_on.png" : "/check_off.png"}`}
        className="aspect-square object-contain object-center w-[30px] fill-stone-300 overflow-hidden shrink-0 max-w-full"
      />
      <div className="text-neutral-600 text-xl leading-6 self-center my-auto">
        {label}
      </div>
      <div className="px-5" />
    </button>
  );
}
