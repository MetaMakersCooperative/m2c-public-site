export function assertNotUndefined<T>(value: T | undefined): asserts value is T {
  if (typeof value === "undefined") {
    throw new Error("Value cannot be undefined");
  }
}