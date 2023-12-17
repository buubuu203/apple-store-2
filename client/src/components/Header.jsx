import React from "react";
import { useEffect } from "react";

const Header = () => {
  return (
    <div className="bg-gray-light text-black text-sm font-SFPro p-1 py-2 font-light pt-14 md:pt-14 lg:pt-20 text-center">
      AppleStoreIS207Client
      <a href="/" className="hover:text-gray underline text-blue">
        {" "}
        Mua sắm ngay
      </a>
    </div>
  );
};

export default Header;
