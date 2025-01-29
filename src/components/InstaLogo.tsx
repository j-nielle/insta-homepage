"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import instaLogoDark from "@/assets/Instagram_logo-1.png";
import instaLogo from "@/assets/Instagram_logo.png";

export default function InstaLogo() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
	
  return (
    <>
      {mounted ? (
        resolvedTheme === "dark" ? (
          <Image
            alt="instagram logo"
            src={instaLogoDark.src}
            width={180}
            height={50}
          />
        ) : (
          <Image
            alt="instagram logo"
            src={instaLogo.src}
            width={180}
            height={50}
          />
        )
      ) : (
        <div style={{ width: 180, height: 50 }} />
      )}
    </>
  );
}
