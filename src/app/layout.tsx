import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/navbar";
import MobileNav from "@/components/mobile-nav";
import ReactQueryProvider from "@/app/react-query-provider";
import Footer from "@/components/footer";
import Head from "next/head";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Yukiumi House",
  description: "Book tours and stay at Yukiumi House",
  icons: {
    icon: "/icons/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16681422523"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16681422523');
            `,
          }}
        />
      </Head>
      <ReactQueryProvider>
        <body
          className={cn(
            "min-h-screen font-sans antialiased flex flex-col",
            fontSans.variable
          )}
        >
          {/* <link rel="icon" href="/icons/favicon.png" sizes="any" /> */}
          <nav className="hidden lg:flex py-2 2xl:py-3 bg-slate-200 h-[4.7vw]">
            <Navbar />
          </nav>
          <nav className="lg:hidden flex z-50">
            <MobileNav />
          </nav>
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </ReactQueryProvider>
    </html>
  );
}
