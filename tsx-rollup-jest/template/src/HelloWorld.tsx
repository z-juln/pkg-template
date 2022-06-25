import React, { useRef } from 'react';

export interface HelloWorldProps extends CommonProps {}

const HelloWorld: React.FC<HelloWorldProps> = ({ className = '', style = {} }) => {
  const ref = useRef(0);

  return (
    <div className={`${className} HelloWorld`} style={style}>
      <h1 key={ref.current}>Hello World!</h1>
    </div>
  );
};

export default HelloWorld;
