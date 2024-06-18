import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Function solution",
  description: "users review : Function solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
