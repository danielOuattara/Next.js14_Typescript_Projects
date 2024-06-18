import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Function solution Food Menu",
  description: "food menu app : Function solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
