// app/layout.tsx
import "./globals.css";
import { Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CategoryProvider } from "@/context/CategoryContext";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Audiophile E-commerce",
  description: "Audiophile - Premium Audio Gear Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-white text-black`}>
        <CategoryProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CategoryProvider>
      </body>
    </html>
  );
}
