import type { Metadata } from "next";
import FriendsContextProvider from "./context/FriendsContext";

export const metadata: Metadata = {
  title: "Context API function solution",
  description: "This page shows the Context API function solution resolution",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <FriendsContextProvider>{children}</FriendsContextProvider>;
}
