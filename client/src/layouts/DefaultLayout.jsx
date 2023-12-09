import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

const DefaultLayout = ({ children }) => {
  const [count, setCount] = useState(0);
  const updateCount = (num) => {
    console.log(num);
    setCount(num);
  };
  useEffect(() => {
    const cartJSONString = window.localStorage.getItem("cart");
    // Vi string JSON muon chuyen ve dang truoc do [1] thi dungf JSON.parse
    const cart = JSON.parse(cartJSONString);
    setCount(cart?.length || 0);
  }, []);
  return (
    <div>
      <Navbar count={count}></Navbar>
      {React.cloneElement(children, { updateCount })}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
