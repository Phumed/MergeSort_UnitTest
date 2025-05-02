import { merge } from "../src/merge";

describe("merge()", () => {
  it("merges three sorted arrays correctly", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [9, 7, 2]; // descending
    const collection_3 = [4, 6, 10];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 9, 10]);
  });

  it("handles empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [])).toEqual([1, 2]);
    expect(merge([], [3, 2], [])).toEqual([2, 3]);
  });

  it("handles arrays with duplicate values", () => {
    const a = [1, 2];
    const b = [3, 2, 1]; // descending
    const c = [2, 3];
    expect(merge(a, b, c)).toEqual([1, 1, 2, 2, 2, 3, 3]);
  });
});
