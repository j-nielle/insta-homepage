import React from "react";

interface InputErrorProps {
  error: string;
}

export default function InputError({ error }: InputErrorProps) {
  return (
    <p className="text-sm font-base text-[#ed4956] text-center mt-3">{error}</p>
  );
}
