import { Inter } from "next/font/google";
import "./globals.css";

import TransitionProvider from "./components/TransitionProvider";
import Home from "./page";
import AboutPage from "./about/page";
import PortfolioPage from "./portfolio/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emmanuel's Portfolio",
  description: "Animated portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Home />
        <AboutPage />
        <PortfolioPage />
      </body>
    </html>
  );
}
