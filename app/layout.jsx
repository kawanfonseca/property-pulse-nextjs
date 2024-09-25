import "../assets/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
