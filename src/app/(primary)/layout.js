import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/FooterSection";

export default function MainLayout({ children }) {
    return (
        <html lang="en">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
        </html>
    );
  }