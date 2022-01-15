import React, { useRef } from 'react';

const HelloWorld = () => {
    const ref = useRef(0);
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", { key: ref.current }, "Hello World!")));
};

const text = "hello world";
console.log(text);
const getText = () => {
    return text;
};

export { HelloWorld, getText as default };
//# sourceMappingURL=index.js.map
