import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import DisclaimerModal from "@/components/DisclaimerModal";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Caliber Labs | Research-Grade Compounds",
  description: "Premium, lab-tested research compounds. HPLC verified, 99%+ purity.",
  icons: {
    icon: "/logos/Emblems/Navy%20Emblem.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${plusJakartaSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <CartProvider>
          <DisclaimerModal />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
