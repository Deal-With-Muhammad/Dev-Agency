import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: "GenieAura – Smart Software, Magical Results",
    template: "%s | GenieAura",
  },
  description:
    "GenieAura is a modern software agency crafting intelligent, user-friendly solutions – from web apps to AI systems – designed to help businesses thrive.",
  keywords: [
    "GenieAura",
    "software agency",
    "web development",
    "mobile app development",
    "Next.js",
    "React",
    "AI solutions",
    "custom software",
  ],
  authors: [{ name: "GenieAura" }],
  creator: "GenieAura",
  publisher: "GenieAura",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "GenieAura – Smart Software, Magical Results",
    description:
      "We build cutting-edge web, mobile, and AI solutions to help businesses succeed in the digital era.",
    url: "https://genieaura.com",
    siteName: "GenieAura",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "GenieAura – Smart Software, Magical Results",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-slate-100 dark:bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto pt-16 px-6 flex-grow">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
