"use client";

import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  return (
    <>
      <h2 className="text-3xl text-center text-gray-600 mt-8">
        {pathname.slice(4).split("-").join(" ")}
      </h2>
    </>
  );
}
