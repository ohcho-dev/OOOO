"use client";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  link?: string;
  time?: number;
}
export default function AnimationLogo({ link, time = 2600 }: Props) {
  const router = useRouter();
  useEffect(() => {
    if (link) {
      const timer = setTimeout(() => {
        router.push(link);
      }, time);
      return () => clearTimeout(timer);
    }
  }, [link]);

  return (
    <section>
      <div className="animate-[logo1_4s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[-220%] text-[#F9E9B3]">
        <Image src="/logo1.webp" alt="육" width={30} height={30} />
      </div>
      <div className="animate-[logo2_4s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[-110%] text-[#F9E9B3]">
        <Image src="/logo1.webp" alt="아" width={30} height={30} />
      </div>
      <div className="animate-[logo3_4s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[-0%] text-[#FFD3D0]">
        <Image src="/logo3.webp" alt="응" width={30} height={30} />
      </div>
      <div className="animate-[logo4_4s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[110%] text-[#F25D24]">
        <Image src="/logo4.webp" alt="원" width={30} height={30} />
      </div>
      <div className="animate-[logo5_4s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[-10%] translate-y-[-100%] ">
        <Image src="/logo3_1.webp" alt="|||" width={38} height={17.5} />
      </div>
    </section>
  );
}
