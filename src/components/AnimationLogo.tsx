"use client";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  link?: string;
}
export default function AnimationLogo({ link }: Props) {
  const router = useRouter();
  useEffect(() => {
    if (link) {
      const timer = setTimeout(() => {
        router.push(link);
      }, 2600);
      return () => clearTimeout(timer);
    }
  }, [link]);

  return (
    <section>
      <div className="animate-[logo1_6s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[-220%] text-[#FFEBAA]">
        <Image src="/logo1.png" alt="육" width={30} height={30} />
      </div>
      <div className="animate-[logo2_6s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[-110%] text-[#FFEBAA]">
        <Image src="/logo1.png" alt="아" width={30} height={30} />
      </div>
      <div className="animate-[logo3_6s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[-0%] text-[#FFA89F]">
        <Image src="/logo3.png" alt="응" width={30} height={30} />
      </div>
      <div className="animate-[logo4_6s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[110%] text-[#FF5C00]">
        <Image src="/logo4.png" alt="원" width={30} height={30} />
      </div>
      <div className="animate-[logo5_6s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[-10%] translate-y-[-100%] ">
        <Image src="/logo3_1.png" alt="|||" width={38} height={17.5} />
      </div>
    </section>
  );
}
