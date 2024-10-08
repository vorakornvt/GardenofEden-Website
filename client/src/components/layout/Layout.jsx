import * as styles from "./Layout.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className={styles.app}>
      <ToastContainer />

      <Header />
      <div className={styles.appContent}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
