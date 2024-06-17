import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Function solution",
  description: "This page shows the functional solution resolution",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
