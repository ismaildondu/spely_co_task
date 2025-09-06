import type { Metadata } from "next";
import "./globals.css";
import {inter} from "@/app/ui/fonts";

import ReactQueryProvider from "@/app/lib/providers/reactquery.provider.component";

export const metadata: Metadata = {
  title: "User Management App",
  description: "A modern Next.js application for managing and viewing user information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <ReactQueryProvider>
            {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
