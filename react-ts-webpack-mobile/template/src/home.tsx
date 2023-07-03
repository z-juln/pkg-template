import React, { useState } from 'react';
// import axios from "axios";

import './style/index.less';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const onClick = () => {
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <>
      <h2 onClick={onClick}>H5 template</h2>
      {currentIndex}
    </>
  );
}

export default Home;
