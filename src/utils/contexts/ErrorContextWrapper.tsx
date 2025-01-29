"use client";

import React, { useState } from "react";
import { ErrorContext as ErrContext } from "@/utils/contexts";
import { Error } from "@/utils/types";

export default function ErrorContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [errors, setErrors] = useState<Error>({
    username: "",
    password: "",
  });
  return (
    <ErrContext.Provider value={{ errors, setErrors }}>
      {children}
    </ErrContext.Provider>
  );
}
