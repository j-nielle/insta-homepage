import React from "react";
import Image from "next/image";
import fbIcon from "@/assets/fb-icon.png";

export default function FacebookLoginPrompt() {
  return (
    <a
      href="https://www.instagram.com/accounts/emailsignup/"
      className="flex items-center justify-center space-x-2 text-sm font-semibold leading-[18px] text-[#0394f5]"
    >
      <Image alt="FB icon" src={fbIcon.src} height={24} width={24} />
      <span>Log in with Facebook</span>
    </a>
  );
}
