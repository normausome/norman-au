import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationMenuCustom } from "@/components/NavigationMenuCustom";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Norman Au",
  description:
    "A website created, managed, and deployed by Norman Au on a raspberry pi 4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationMenuCustom />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
