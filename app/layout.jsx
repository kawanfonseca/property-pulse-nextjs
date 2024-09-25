import "../assets/styles/globals.css";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
      </body>
    </html>
  );
};

export default MainLayout;
