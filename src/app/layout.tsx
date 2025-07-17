import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const gohuFont = localFont({
  variable: "--font-gohu-mono",
  src: "../../public/fonts/gohufont-uni-14.ttf",
});

const rubikFont = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inferst - Personal website",
  description: "Inferst - Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rubikFont.variable} ${gohuFont.variable} antialiased`}
      >
        <ThemeProvider enableSystem={true} attribute="class">
          {children}
        </ThemeProvider>
        <script
          data-collect-dnt="true"
          async
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
        <noscript>
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </body>
    </html>
  );
}
