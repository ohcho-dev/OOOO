"use client";
export default function StepTitle({ number = 1 }) {
  return (
    <div className="w-full text-[#FF5C00] text-center text-[3.6rem] pt-[9.5rem] font-bold">
      Step {number}
    </div>
  );
}
