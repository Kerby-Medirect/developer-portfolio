import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kerby Medirect | Developer Portfolio",
  description: "A passionate full-stack developer creating digital solutions that make a difference. Explore my projects, skills, and experience.",
  keywords: ["developer", "portfolio", "full-stack", "react", "next.js", "typescript", "Kerby Medirect"],
  authors: [{ name: "Kerby Medirect" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kerbymedirect.dev",
    title: "Kerby Medirect | Developer Portfolio",
    description: "A passionate full-stack developer creating digital solutions that make a difference.",
    siteName: "Kerby Medirect Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerby Medirect | Developer Portfolio",
    description: "A passionate full-stack developer creating digital solutions that make a difference.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "hsl(var(--background))",
                color: "hsl(var(--foreground))",
                border: "1px solid hsl(var(--border))",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
