"use client";

import React, { useState, useContext } from "react";
import { ErrorContext as Error } from "@/utils/contexts";

export default function LoginForm() {
  const { errors, setErrors } = useContext(Error);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);

  // this function validates the form and sets the errors
  const validateForm = () => {
    const newErrors = { username: "", password: "" };
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  // this function handles the form submission
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
          {/* this &nbsp; is used to ensure the input field is not empty, which helps with styling and label positioning */}
          <input
            id="username"
            type="text"
            placeholder="&nbsp;"
            className={`w-[268px] h-[38px] px-2 text-xs leading-[18px] rounded ring-1 ring-neutral-300 dark:ring-[#525252] text-neutral-700 dark:bg-[#121212] dark:text-white focus:outline-none focus-visible:outline-none peer transition-all duration-300 [&:not(:placeholder-shown)]:text-[11px] [&:not(:placeholder-shown)]:pt-4 [&:not(:placeholder-shown)]:pb-1 ${
              errors.username
                ? "border-red-500"
                : "dark:ring-[#525252] ring-neutral-200"
            }`}
            onChange={handleUsernameChange}
          />
          <label
            htmlFor="username"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-all duration-300 text-xs origin-left pointer-events-none peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:scale-100 peer-[&:not(:placeholder-shown)]:top-0.5 peer-[&:not(:placeholder-shown)]:text-[11px] focus:outline-none focus-visible:outline-none peer-[&:not(:placeholder-shown)]:scale-100 peer-[&:not(:placeholder-shown)]:translate-y-0">
            Phone number, username, or email
          </label>
        </div>
        <div className="relative">
          <input
            id="password"
            type={togglePassword ? "text" : "password"}
            placeholder="&nbsp;"
            className={`w-[268px] h-[38px] px-2 text-xs leading-[18px] rounded ring-1 ring-neutral-300 dark:ring-[#525252] text-neutral-700 dark:bg-[#121212] dark:text-white focus:outline-none focus-visible:outline-none peer transition-all duration-300 [&:not(:placeholder-shown)]:text-[11px] [&:not(:placeholder-shown)]:pt-4 [&:not(:placeholder-shown)]:pb-1 ${
              errors.password
                ? "border-red-500"
                : "dark:ring-[#525252] ring-neutral-200"
            }`}
            onChange={handlePasswordChange}
          />
          <label
            htmlFor="password"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-all duration-300 text-xs origin-left pointer-events-none peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:scale-100 peer-[&:not(:placeholder-shown)]:top-0.5 peer-[&:not(:placeholder-shown)]:text-[11px] focus:outline-none focus-visible:outline-none peer-[&:not(:placeholder-shown)]:scale-100 peer-[&:not(:placeholder-shown)]:translate-y-0">
            Password
          </label>
          {password && (
            <button
              onClick={() => setTogglePassword((prev) => !prev)}
              type="button"
              className="absolute right-[10px] text-sm font-semibold top-1/2 -translate-y-1/2 bg-none border-0 cursor-pointer">
              {togglePassword ? "Hide" : "Show"}
            </button>
          )}
        </div>
      </div>
      <button
        disabled={!username || !password || password.length < 6}
        type="submit"
        className="w-full h-8 rounded-lg bg-[#0195f7] py-1 disabled:opacity-80 text-sm font-medium text-white enabled:hover:bg-blue-600">
        Log In
      </button>
    </form>
  );
}
