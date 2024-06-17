import type { Metadata } from "next";
import StoreProvider from "./store/StoreProvider";

export const metadata: Metadata = {
  title: "React Redux solution",
  description: "This page shows the React-Redux function solution resolution",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <StoreProvider>{children}</StoreProvider>;
}
