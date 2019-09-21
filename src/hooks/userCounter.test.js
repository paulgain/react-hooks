import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "./useCounter";

test("should increment counter", () => {
  const { result } = renderHook(() => useCounter());

  act(() => result.current.increment());

  expect(result.current.count).toBe(1);
});

test("should decrement counter", () => {
  const { result } = renderHook(() => useCounter());

  act(() => result.current.decrement());

  expect(result.current.count).toBe(-1);
});
