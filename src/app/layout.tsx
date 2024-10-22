import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import QueryProvider from "@/components/query-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Task Tracker",
  description:
    "Effortlessly manage tasks, collaborate with your team, and achieve your goals faster than ever before.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
