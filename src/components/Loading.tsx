import AnimationLogo from "./AnimationLogo";

export default function Loading({ url = "" }) {
  return (
    <div className="fixed z-[100] top-[-100svh] left-[50%] translate-x-[-50%] w-full max-w-[52rem] h-[100svh]">
      <div className="fixed top-0 left-[50%] translate-x-[-50%] w-full max-w-[52rem] h-[100svh] flex flex-col items-center justify-center">
        <div className="mb-[20rem] text-[2rem] text-white">
          서약서 생성중...
        </div>
        <AnimationLogo link={url} time={1600} />
      </div>
    </div>
  );
}
