import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Roots Sri Lanka | Nano Banana",
  description: "Experience the premium 3D beverage journey with Roots Sri Lanka. Pure, fresh, and naturally crafted.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} font-sans antialiased text-black bg-transparent relative`}
        suppressHydrationWarning
      >
        <div id="root-app" suppressHydrationWarning>
          {children}
        </div>
      </body>
    </html>
  );
}
