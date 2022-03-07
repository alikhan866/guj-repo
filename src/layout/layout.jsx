import React from "react";
import Footer from "../containers/footer/footer";
import Nav from "../containers/nav/nav";

const Layout = (props) => {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
