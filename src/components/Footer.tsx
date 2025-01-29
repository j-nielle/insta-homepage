"use client";

import { footerLinks } from "@/utils/links";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="px-4 mx-auto min-[875px]:h-12 mt-4">
      <div className="h-[83px] m-0 mb-[52px] flex items-stretch justify-start box-border">
        <div className="mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-xs text-[#979797] hover:text-gray-600">
                {link.title}
              </a>
            ))}
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <span className="text-xs text-[#979797]">English (UK)</span>
            <span className="text-xs text-[#979797]">
              © {year} Instagram from Meta
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
