"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div>
      <nav>
        <ul></ul>
      </nav>
    </div>
  );
}
