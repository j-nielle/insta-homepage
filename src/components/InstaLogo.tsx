import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import instaLogoDark from "@/assets/Instagram_logo-1.png";
import instaLogo from "@/assets/Instagram_logo.png";
import { useMounted } from "@/utils/useMounted";

export default function InstaLogo() {
  const isMounted = useMounted();
  const { resolvedTheme } = useTheme();

  return (
    <>
      {isMounted ? (
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
