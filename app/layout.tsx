import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "map2map",
  description: "map2map",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
