import getText from '../index';

describe('getText', () => {
  it('getText() === "hello world"', () => {
    const text = getText();
    expect(text).toBe('hello world');
  });
});
