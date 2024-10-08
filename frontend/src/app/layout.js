import { Inter } from "next/font/google";
import "./globals.css";

// Loading in global font for website
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UMN Combinator",
  description: "Generated by create next app",
};

// Wraps every element on every page
// - Applies globals.css
// - Sets HTML metadata
// - Applies Inter font to all contents
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
