import { helper038 } from "./helper038";

describe("helper038", () => {
  it("transforms valid input", () => {
    expect(helper038(" Sample Input ")).toContain("h037");
  });

  it("rejects blank input", () => {
    expect(() => helper038("   ")).toThrow(
      "helper038 requires a non-empty input",
    );
  });
});
