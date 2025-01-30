"use client";

import { useEffect, useState } from "react";

// this hook returns a boolean value that indicates whether the component is mounted
export function useMounted() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  return isMounted;
}
