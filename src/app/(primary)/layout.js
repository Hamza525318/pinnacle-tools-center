"use client";
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/FooterSection";
import { Toaster } from "../../../components/ui/sonner";

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster/>
      </body>
    </html>
  );
}
