/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { cn } from "@/utils/cn";
import { DEFAULT_INPUT_CLASS, DEFAULT_LABEL_CLASS } from "@/utils/ui";
import React from "react";

interface InputProps {
  label: string;
  type: "text" | "password" | "email";
  labelClass?: string;
  inputClass?: string;
  inputFor: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  type,
  labelClass,
  inputClass,
  inputFor,
  onChange,
}: InputProps) {
  return (
    <div className="relative">
      <input
        id={inputFor}
        min={type === "password" ? 6 : 0}
        type={type}
        placeholder=" "
        className={inputClass}
        onChange={onChange}
      />
      <label htmlFor={inputFor} className={labelClass}>
        {label}
      </label>
    </div>
  );
}
