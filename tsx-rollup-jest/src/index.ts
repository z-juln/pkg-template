const text = 'hello world';
console.log(text);

const getText = (): string => {
  return text;
};
export default getText;
export { default as HelloWorld } from './HelloWorld';
