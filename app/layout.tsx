import type { Metadata } from "next";
import { Geist, Geist_Mono, Fredoka } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Playfair_Display, Poppins } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap"
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap"
})

const fredokaOne = Fredoka({
  variable: "--font-fredoka-one",
  weight: '400', // Fredoka One has only one weight (400)
  subsets: ['latin'],
  display: 'swap', // Ensures the fallback font is used until Fredoka One loads
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rupado",
  description: "Turn boring pictures into trending AI profile photos",

  icons: {
    icon: "/web-app-manifest-192x192.png",
    apple: "/web-app-manifest-512x512.png",
  },

  manifest: "/site.webmanifest",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${playfair.variable} ${poppins.variable} ${geistMono.variable} ${fredokaOne.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
