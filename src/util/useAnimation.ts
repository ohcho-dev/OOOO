"use client";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useAnimation() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/promotion/pledge");
    }, 4000);
  }, []);
}
