"use client";

import React, { useContext } from "react";
import { ErrorContext } from "@/utils/contexts";
import {
  FacebookLoginPrompt,
  ForgotPasswordPrompt,
  InputError,
} from "@/components";

export default function AuthOptionsPrompt() {
  const { errors } = useContext(ErrorContext);

  const renderError = () => {
    if (errors.username || errors.password) {
      return <InputError error={errors.username || errors.password} />;
    } else {
      return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <FacebookLoginPrompt />
      {renderError()}
      <ForgotPasswordPrompt />
    </div>
  );
}
