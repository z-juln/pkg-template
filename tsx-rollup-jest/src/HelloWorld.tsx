import React, { useRef } from "react";

export type HelloWorldProps = {};

const HelloWorld: React.FC<HelloWorldProps> = () => {
  const ref = useRef(0);

  return (
    <>
      <h1 key={ref.current}>Hello World!</h1>
    </>
  );
};

export default HelloWorld;
