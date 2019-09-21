import { useState, useEffect } from "react";

const getSomeName = () => Promise.resolve("Betty");

const useName = prefix => {
  const [name, setName] = useState("nobody");

  useEffect(() => {
    getSomeName().then(theName => {
      setName(prefix ? `${prefix} ${theName}` : theName);
    });
  }, [prefix]);

  return name;
};

export default useName;
