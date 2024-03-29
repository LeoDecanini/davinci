import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/users/shared/Nav";
import Footer from "@/components/users/shared/Footer";
import Providers from "@/app/Providers";
import { LayoutProvider } from "@/app/LayoutProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <Providers>
          <LayoutProvider>
            <main>{children}</main>
          </LayoutProvider>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
