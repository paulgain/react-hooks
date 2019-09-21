import { useState, useEffect } from "react";

const somePromise = () => Promise.resolve();

function useError(throwError) {
  if (throwError) {
    throw new Error("expected");
  }
  return true;
}

function useAsyncError(throwError) {
  const [value, setValue] = useState();
  useEffect(() => {
    somePromise().then(() => {
      setValue(throwError);
    });
  }, [throwError]);
  return useError(value);
}

export default useAsyncError;
