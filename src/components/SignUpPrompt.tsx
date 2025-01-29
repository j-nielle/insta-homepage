import React from "react";

export default function SignUpPrompt() {
  return (
    <div className="mt-4 bg-white dark:bg-black p-4 text-center text-black dark:text-white text-sm min-[875px]:dark:ring-neutral-700 min-[875px]:ring-neutral-200 min-[875px]:ring-1 rounded-sm">
      Don&apos;t have an account?{" "}
      <a href="https://www.instagram.com/accounts/emailsignup/" className="font-semibold text-blue-500">
        Sign up
      </a>
    </div>
  );
}
