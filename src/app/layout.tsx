import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/navbar";
import MobileNav from "@/components/mobile-nav";
import ReactQueryProvider from "@/app/react-query-provider";
import Footer from "@/components/footer";
import { GoogleTagManager } from '@next/third-parties/google'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Hokkaido Backcountry Skiing | Stay at Yukiumi House Japan",
  description:
    "Experience Hokkaido backcountry skiing in Furano, Kamikawa, Kurodake, Asahidake and stay in a cozy lodge near Japan’s best terrain - Yukiumi House.",
  keywords: [
    "hokkaido skiing",
    "hokkaido backcountry skiing",
    "backcountry ski japan",
    "japan ski season",
    "best time to ski in japan",
    "japan ski trip",
    "japan ski resorts",
    "hokkaido backcountry guided tours",
  ],
  icons: {
    icon: "/icons/favicon.png",
  },
  openGraph: {
    title: "Hokkaido Backcountry Skiing | Stay at Yukiumi House Japan",
    description:
    "Experience Hokkaido backcountry skiing in Furano, Kamikawa, Kurodake, Asahidake and stay in a cozy lodge near Japan’s best terrain - Yukiumi House.",
    url: "https://yukiumihouse.com/",
    images: [
      {
        url: "/images/blogs/blog-0/PXL_20240104_063155802.jpg",
        width: 1200,
        height: 630,
        alt: "Asahidake Ropeway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hokkaido Backcountry Skiing | Stay at Yukiumi House Japan",
    description:
    "Experience Hokkaido backcountry skiing in Furano, Kamikawa, Kurodake, Asahidake and stay in a cozy lodge near Japan’s best terrain - Yukiumi House.",
    images: ["/images/blogs/blog-0/PXL_20240104_063155802.jpg"],
    creator: "@ferranm99",
  },
  metadataBase: new URL("https://yukiumihouse.com"),
  alternates: {
    canonical: "https://yukiumihouse.com",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <GoogleTagManager gtmId="AW-16681422523" />
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
