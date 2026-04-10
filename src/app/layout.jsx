import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "YoloToo | Luxury Yacht Charter & Concierge Service",
  description:
    "Experience the ultimate luxury with YoloToo yacht charters. Personalized concierge service, stunning destinations, and unforgettable escapes. Book your dream yacht experience today.",
  keywords: [
    "Yacht Charter",
    "Luxury Yacht",
    "YoloToo",
    "Private Yacht Rental",
    "Concierge Service",
    "Yacht Brochure",
  ],
  authors: [{ name: "Martin Vassallo" }],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "YoloToo | Luxury Yacht Charter & Concierge Service",
    description:
      "Discover the ultimate luxury with YoloToo yacht charters. Exclusive concierge service and breathtaking destinations.",
    url: "https://yolotoo.com",
    siteName: "YoloToo",
    images: [
      {
        url: "/BrochureBg.jpg",
        width: 1200,
        height: 630,
        alt: "YoloToo Luxury Yacht",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YoloToo | Luxury Yacht Charter & Concierge Service",
    description:
      "Discover the ultimate luxury with YoloToo yacht charters. Exclusive concierge service and breathtaking destinations.",
    images: ["/BrochureBg.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
