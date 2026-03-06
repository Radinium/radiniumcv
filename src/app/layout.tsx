import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

import "./globals.css";
import React from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://radiniumcv.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    </html>
  );
}
