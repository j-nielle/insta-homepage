"use client";

import React from "react";
import ThemeProvider from "@/utils/provider/ThemeProvider";
import dynamic from "next/dynamic";

const ThemeSwitcher = dynamic(() => import("./ThemeSwitcher"), { ssr: false });

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      {children}
    </ThemeProvider>
  );
}
