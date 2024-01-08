"use client";
export default function StepTitle({ number = 1 }) {
  return (
    <div className="w-full text-[#F25D24] text-center text-[3.6rem] pt-[9.5rem] font-bold">
      Step {number}
    </div>
  );
}
