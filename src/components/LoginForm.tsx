"use client";

import React, { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

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
  );
}
