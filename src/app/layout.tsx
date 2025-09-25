import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "NeuralFlow - AI Automation for Modern Businesses",
  description: "Transform your business with intelligent automation solutions",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
