import { renderHook, act } from "@testing-library/react-hooks";
import useName from "./useName";

test("should wait for next update", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useName());

  expect(result.current).toBe("nobody");

  await waitForNextUpdate();

  expect(result.current).toBe("Betty");
});
