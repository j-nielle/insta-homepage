"use client";

import React from "react";
import {
  AppDownload,
  InstaLogo,
  LoginForm,
  SignUpPrompt,
  AuthOptionsPrompt,
} from "@/components";
import ErrorContextWrapper from "@/utils/contexts/ErrorContextWrapper";

export default function LoginCard() {
  return (
    <div className="w-fit min-[450px]:w-[350px] z-50">
      <div className="bg-white dark:bg-black p-[41px] min-h-[409px] max-h-[458px] min-[450px]:dark:ring-neutral-700 min-[450px]:ring-neutral-200 min-[450px]:ring-1 rounded-sm">
        <div className="inline-flex flex-row w-full justify-center mb-[35px]">
          <InstaLogo />
        </div>
        <ErrorContextWrapper>
          <LoginForm />
          <div className="my-6 flex items-center justify-center space-x-2">
            <div className="h-px flex-1 dark:bg-neutral-700 bg-neutral-200"></div>
            <span className="text-xs text-[#a6a6a6] font-semibold">OR</span>
            <div className="h-px flex-1 dark:bg-neutral-700 bg-neutral-200"></div>
          </div>
          <AuthOptionsPrompt />
        </ErrorContextWrapper>
      </div>

      <SignUpPrompt />
      <AppDownload />
    </div>
  );
}
