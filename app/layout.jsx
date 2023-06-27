import "./globals.css";
import { League_Spartan } from "next/font/google";
import { Navbar } from "./components";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Room Homepage",
  description: "Get a room",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} max-w-[1450px] mx-auto relative`}>
        <div className="absolute w-screen top-0 left-0 z-10">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
