import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CrabBot",
  description:
    "A simple Discord bot for creating weekly availability schedules for your group.",
  robots: {
    index: false,
  },
  openGraph: {
    title: "CrabBot",
    description:
      "A simple bot for creating weekly availability schedules for your group.",
    url: "https://crab.soapful.gg",
    type: "website",
    images: [
      {
        url: "https://cdn.wikimg.net/en/splatoonwiki/images/e/eb/S3_Tableturf_Battle_card_Crab_Tank.png?20220923142419",
        width: 366,
        height: 512,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
