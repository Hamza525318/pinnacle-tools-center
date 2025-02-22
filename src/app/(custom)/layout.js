"use client";
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/FooterSection";

export default function CustomLayout({ children }) {
  return (
<html lang="en">
    <body>
        {children}
    </body>
</html>
);
}
