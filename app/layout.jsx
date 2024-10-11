import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthProvider from "../components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../public/assets/styles/globals.css";

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
