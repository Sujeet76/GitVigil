import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import Sitenav from "@/components/Sitenav";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner"
import QueryProvider from "@/providers/QueryProvider";
import SessionProvider from "@/providers/SessionProvider";
import NextTopLoader from 'nextjs-toploader';
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from "geist/font/sans";


export const metadata: Metadata = {
  title: "GitVigil",
  description: "An open-source tool to help developers maintain their GitHub contribution streaks effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{"GitVigil"}</title>
        <meta name="description" content={"An open-source tool to help developers maintain their GitHub contribution streaks effortlessly."} />
        <link rel="icon" href="/logo.svg" />
        <meta property="og:image" content={"https://utfs.io/f/67924083-d515-4314-9aaf-e0d86107dac0-g1rjny.png"} />
      </head>
      <body
        className={cn(
          "min-h-screen grid grid-rows-[auto_1fr_auto] bg-background font-sans antialiased",
          `${GeistSans.variable}`
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <QueryProvider>
              <NextTopLoader color="#FFAE36" showSpinner={false} />
              <Sitenav />
              {children}
              <Analytics />
              <Footer />
              <Toaster duration={3000} />
            </QueryProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
