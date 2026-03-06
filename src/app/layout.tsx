import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import React from "react";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
      <Script
        src="/_vercel/speed-insights/script.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
