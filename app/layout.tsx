import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Let Oliver work at Groq",
  description: "I think you're in exactly the right place in the AI stack at exactly the right time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

