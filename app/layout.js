"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBarComp from "@/components/Ui/NavBarComp";
import SideBarComp from "@/components/Ui/sideBarComp";
import AuthProvider from "@/context/auth";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Admin Panel",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ display: "flex" }}>
          <AuthProvider>
            <aside className="side-bar-cont">
              <SideBarComp />
            </aside>

            <div style={{ width: "86%" }}>
              <NavBarComp />
              <main style={{ padding: 15 }}>{children}</main>
            </div>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
