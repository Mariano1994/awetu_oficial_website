import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const neopixelFont = localFont({
  src: "../assets/fonts/neopixel-regular.otf",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});
