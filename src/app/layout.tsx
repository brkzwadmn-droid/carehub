import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";


const harmoniaSans = localFont({
  src: "./fonts/Harmonia-Sans.ttf",
  variable: "--font-harmonia-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const bigolaRegular = localFont({
  src: "./fonts/Bigola.ttf",
  variable: "--font-bigola",
});

export const metadata: Metadata = {
  title: "ShiftCare — Run a stronger care agency with AI driven scheduling",
  description:
    "Purpose-built for IDD, HCBS and non-medical home care. ShiftCare brings together scheduling, EVV, documentation and e-Billing into one simple system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bigolaRegular.variable} ${harmoniaSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
