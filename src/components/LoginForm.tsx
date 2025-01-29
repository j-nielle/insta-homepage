"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import googlePlay from "@/assets/Google_Play_Store_badge_EN.png";
import fbIcon from "@/assets/fb-icon.png";
import instaLogoDark from "@/assets/Instagram_logo-1.png";
import instaLogo from "@/assets/Instagram_logo.png";

export default function LoginForm() {
  const { resolvedTheme } = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validateForm = () => {
    const newErrors = { username: "", password: "" };
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
    }
  };

  return (
    <div className="w-[350px] h-[586px] z-50">
      <div className="bg-white dark:bg-black p-[41px] min-[875px]:dark:ring-neutral-700 min-[875px]:ring-neutral-200 min-[875px]:ring-1 rounded-sm">
        <div className="inline-flex flex-row w-full justify-center mb-[35px]">
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
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div>
              <input
                type="text"
                placeholder="Phone number, username, or email"
                className={`w-full rounded ring-1 p-2 text-neutral-700 dark:bg-[#121212] dark:text-white h-[37.6px] focus:outline-none text-xs leading-[18px] ${
                  errors.username
                    ? "border-red-500"
                    : "dark:ring-neutral-700 ring-neutral-200"
                }`}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && (
                <p className="text-xs text-red-500">{errors.username}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                min={6}
                className={`w-full mt-[7px] rounded ring-1 p-2 text-neutral-700 dark:bg-[#121212] dark:text-white h-[37.6px] focus:outline-none text-xs leading-[18px] ${
                  errors.password
                    ? "border-red-500"
                    : "dark:ring-neutral-700 ring-neutral-200"
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-xs text-red-500">{errors.password}</p>
              )}
            </div>
          </div>
          <button
            disabled={!username || !password}
            type="submit"
            className="w-full h-8 rounded-lg bg-blue-500 py-1 disabled:opacity-80 text-sm font-medium text-white enabled:hover:bg-blue-600">
            Log In
          </button>
        </form>

        <div className="my-6 flex items-center justify-center space-x-2">
          <div className="h-px flex-1 dark:bg-neutral-700 bg-neutral-200"></div>
          <span className="text-xs text-[#a6a6a6] font-semibold">OR</span>
          <div className="h-px flex-1 dark:bg-neutral-700 bg-neutral-200"></div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <button className="flex items-center justify-center space-x-2 text-sm font-semibold leading-[18px] text-[#0394f5]">
            <Image alt="FB icon" src={fbIcon.src} height={24} width={24} />
            <span>Log in with Facebook</span>
          </button>

          <a
            href="#"
            className="mt-4 block text-center text-sm text-black dark:text-white">
            Forgot password?
          </a>
        </div>
      </div>

      <div className="mt-4 bg-white dark:bg-black p-4 text-center text-black dark:text-white text-sm min-[875px]:dark:ring-neutral-700 min-[875px]:ring-neutral-200 min-[875px]:ring-1 rounded-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="font-semibold text-blue-500">
          Sign up
        </a>
      </div>

      <div className="mt-4 space-y-4 text-center">
        <p className="text-sm text-black dark:text-white">Get the app.</p>
        <div className="flex justify-center space-x-2">
          <Image
            src={googlePlay.src}
            alt="Google Play"
            className="h-10"
            width={138}
            height={40}
          />
          <Image
            src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
            alt="App Store"
            className="h-10"
            width={120}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}
