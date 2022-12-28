import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Header toggle={toggle} setToggle={setToggle} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
