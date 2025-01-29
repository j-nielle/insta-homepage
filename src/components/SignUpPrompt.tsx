import React from "react";

export default function SignUpPrompt() {
  return (
    <div className="mt-3 bg-white h-[63px] flex flex-row gap-1 items-center justify-center dark:bg-black p-4 text-center text-black dark:text-white text-sm min-[450px]:dark:ring-neutral-700 min-[450px]:ring-neutral-200 min-[450px]:ring-1 rounded-sm">
      Don&apos;t have an account?{" "}
      <a
        href="https://www.instagram.com/accounts/emailsignup/"
        className="font-semibold text-blue-500"
      >
        Sign up
      </a>
    </div>
  );
}
