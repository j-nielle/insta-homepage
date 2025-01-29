'use client';

import { createContext } from "react";
import { InputErrorContextType } from "@/utils/types";

export const ErrorContext = createContext<InputErrorContextType>({
  errors: {},
  setErrors: () => {}
});