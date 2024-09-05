import classnames, { ArgumentArray } from "classnames";

export const basicPrefix = '<%= changeCase(name, 'kebab') %>';

export const getPrefix = (subPrefix: string) => `${basicPrefix}-${subPrefix}`;

const getClsWithPrefix = (subPrefix: string) => {
  const prefix = getPrefix(subPrefix);
  const cls = (...args: ArgumentArray): string => {
    if (args.length === 0) return prefix;
    return classnames(args.map(arg => {
      if (typeof arg === 'string') {
        return arg === '' ? prefix : `${prefix}__${arg}`;
      } else if (Array.isArray(arg)) {
        return arg.map(a => cls(a)).join(' ');
      } else {
        return Object.entries(arg as any).filter(([_, v]) => v).map(([arg]) => arg === '' ? prefix : `${prefix}__${arg}`);
      }
    }));
  };
  return cls;
};

export default getClsWithPrefix;
