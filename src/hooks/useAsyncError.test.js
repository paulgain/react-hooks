import { renderHook, act } from "@testing-library/react-hooks";
import useAsyncError from "./useAsyncError";

test("should raise async error", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAsyncError(true));

  await waitForNextUpdate();

  expect(() => {
    expect(result.current).not.toBe(undefined);
  }).toThrow(Error("expected"));
});

test("should capture async error", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAsyncError(true));

  await waitForNextUpdate();

  expect(result.error).toEqual(Error("expected"));
});

test("should not capture async error", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAsyncError(false));

  await waitForNextUpdate();

  expect(result.current).not.toBe(undefined);
  expect(result.error).toBe(undefined);
});
