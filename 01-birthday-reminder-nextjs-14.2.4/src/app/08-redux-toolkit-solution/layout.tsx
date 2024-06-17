import type { Metadata } from "next";
import StoreProvider from "./redux/StoreProvider";

export const metadata: Metadata = {
  title: "Redux Toolkit solution",
  description: "This page shows the Redux Toolkit function solution resolution",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <StoreProvider>{children}</StoreProvider>;
}
