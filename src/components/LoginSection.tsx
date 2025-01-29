"use client";

import React from "react";
import Image from "next/image";
import fbIcon from "@/assets/fb-icon.png";
import { AppDownload, InstaLogo, LoginForm, SignUpPrompt } from "@/components";

export default function LoginSection() {
  return (
    <div className="w-fit md:w-[350px] z-50">
      <div className="bg-white dark:bg-black p-[41px] h-[409px] min-[875px]:dark:ring-neutral-700 min-[875px]:ring-neutral-200 min-[875px]:ring-1 rounded-sm">
        <div className="inline-flex flex-row w-full justify-center mb-[35px]">
          <InstaLogo />
        </div>
        <LoginForm />

        <div className="my-6 flex items-center justify-center space-x-2">
          <div className="h-px flex-1 dark:bg-neutral-700 bg-neutral-200"></div>
          <span className="text-xs text-[#a6a6a6] font-semibold">OR</span>
          <div className="h-px flex-1 dark:bg-neutral-700 bg-neutral-200"></div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <a
            href="https://www.instagram.com/accounts/emailsignup/"
            className="flex items-center justify-center space-x-2 text-sm font-semibold leading-[18px] text-[#0394f5]">
            <Image alt="FB icon" src={fbIcon.src} height={24} width={24} />
            <span>Log in with Facebook</span>
          </a>

          <a
            href="https://www.instagram.com/accounts/password/reset/"
            className="mt-4 block text-center text-sm text-black dark:text-white">
            Forgot password?
          </a>
        </div>
      </div>

      <SignUpPrompt />
      <AppDownload />
    </div>
  );
}
