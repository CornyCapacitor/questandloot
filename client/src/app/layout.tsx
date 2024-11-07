import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quest & Loot",
  description: "Fight your way to glory and fame!",
  icons: {
    icon: "/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="antialiased dark w-full h-screen max-h-screen max-w-screen">
        {children}
      </body>
    </html >
  );
}
