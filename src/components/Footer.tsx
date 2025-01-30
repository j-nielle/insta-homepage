"use client";

import { footerLinks, languageOptions } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

export default function Footer() {
  const [year, setYear] = useState<number>();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

  // set the current year when the component mounts
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    console.log(selectedLanguage);
  }, [selectedLanguage]);

  const handleSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedText = e.target.options[e.target.selectedIndex].text;
    setSelectedLanguage(selectedText);
  };

  return (
    <footer className="px-4 mx-auto min-[875px]:h-12 mt-4">
      <div className="h-[83px] m-0 mb-[52px] flex items-stretch justify-start box-border">
        <div className="mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-xs text-[#979797] hover:text-gray-600 hover:underline">
                {link.title}
              </a>
            ))}
          </div>
          <div className="mt-4 flex justify-center space-x-4 ">
            <span className="text-xs text-[#979797]">
              <select
                onChange={handleSelected}
                name="lang"
                id="lang"
                className={cn(
                  "bg-transparent z-0 focus:outline-none w-16 max-w-16",
                  { "min-w-max w-auto": selectedLanguage.length > 7 }
                )}>
                {languageOptions.map((option, index) => (
                  <option
                    key={index}
                    value={option.value}
                    className="whitespace-nowrap">
                    {option.name}
                  </option>
                ))}
              </select>
            </span>
            <span className="text-xs text-[#979797] z-10">
              © {year} Instagram from Meta
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
