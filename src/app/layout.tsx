import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "../shared/styles/text.scss";
import "./globals.css";

const montserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Minohary Nantenaina",
  description: "Bienvenue sur le portfolio de Minohary Nantenaina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BLWY5SQWPB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BLWY5SQWPB');`}
        </Script>
      </head>
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}

