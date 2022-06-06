import { expectNotType, expectType } from "tsd";

describe("type test", () => {
  it("true is boolean", () => {
    expectType<boolean>(true);
  });
  it("true not is false", () => {
    expectNotType<false>(true);
  });
});
