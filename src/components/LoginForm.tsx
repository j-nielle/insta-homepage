"use client";

import React, { useState, useContext } from "react";
import { ErrorContext as Error } from "@/utils/contexts";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Input } from "@/components";

export default function LoginForm() {
  const { errors, setErrors } = useContext(Error);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      setErrors({
        username: "",
        password:
          "Sorry, your password was incorrect. Please double-check your password.",
      });
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <div className="relative">
          <input
            id="username"
            type="text"
            placeholder=" "
            className={`w-full px-2 text-xs leading-[18px] rounded ring-1 ring-neutral-300 dark:ring-neutral-700 text-neutral-700 dark:bg-[#121212] dark:text-white h-[37.6px] focus:outline-none focus-visible:outline-none peer transition-all duration-300 [&:not(:placeholder-shown)]:text-[10px] [&:not(:placeholder-shown)]:pt-4 [&:not(:placeholder-shown)]:pb-1 ${
              errors.username
                ? "border-red-500"
                : "dark:ring-neutral-700 ring-neutral-200"
            }`}
            onChange={handleUsernameChange}
          />
          <label
            htmlFor="username"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-all duration-300 text-xs origin-left pointer-events-none peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:scale-100 peer-[&:not(:placeholder-shown)]:top-0.5 peer-[&:not(:placeholder-shown)]:text-[10px] focus:outline-none focus-visible:outline-none peer-[&:not(:placeholder-shown)]:scale-100 peer-[&:not(:placeholder-shown)]:translate-y-0">
            Phone number, username, or email
          </label>
        </div>
        <div className="relative">
          <input
            id="password"
            type="password"
            placeholder=" "
            className={`w-full px-2 text-xs leading-[18px] rounded ring-1 ring-neutral-300 dark:ring-neutral-700 text-neutral-700 dark:bg-[#121212] dark:text-white h-[37.6px] focus:outline-none focus-visible:outline-none peer transition-all duration-300 [&:not(:placeholder-shown)]:text-[10px] [&:not(:placeholder-shown)]:pt-4 [&:not(:placeholder-shown)]:pb-1 ${
              errors.password
                ? "border-red-500"
                : "dark:ring-neutral-700 ring-neutral-200"
            }`}
            onChange={handlePasswordChange}
          />
          <label
            htmlFor="password"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-all duration-300 text-xs origin-left pointer-events-none peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:scale-100 peer-[&:not(:placeholder-shown)]:top-0.5 peer-[&:not(:placeholder-shown)]:text-[10px] focus:outline-none focus-visible:outline-none peer-[&:not(:placeholder-shown)]:scale-100 peer-[&:not(:placeholder-shown)]:translate-y-0">
            Password
          </label>
        </div>
        {/* 
        <Input
          inputClass={
            errors.username
              ? "border-red-500"
              : "dark:ring-neutral-700 ring-neutral-200"
          }
          inputFor="usernameF"
          label="Phone number, username, or email"
          type="text"
          onChange={handleUsernameChange}
        />
        <Input
          inputClass={
            errors.password
              ? "border-red-500"
              : "dark:ring-neutral-700 ring-neutral-200"
          }
          inputFor="passwordF"
          label="Password"
          type="password"
          onChange={handlePasswordChange}
        /> */}
      </div>
      <button
        disabled={!username || !password || password.length < 6}
        type="submit"
        className="w-full h-8 rounded-lg bg-blue-500 py-1 disabled:opacity-80 text-sm font-medium text-white enabled:hover:bg-blue-600">
        Log In
      </button>
    </form>
  );
}
