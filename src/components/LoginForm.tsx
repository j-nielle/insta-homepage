"use client";

import React, { useState, useContext } from "react";
import { ErrorContext as Error } from "@/utils/contexts";
import { Input } from "@/components";

export default function LoginForm() {
  const { setErrors } = useContext(Error);
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
        <Input
          inputFor="username"
          label="Phone number, username, or email"
          type="text"
          onChange={handleUsernameChange}
        />
        <Input
          inputFor="password"
          label="Password"
          type="password"
          onChange={handlePasswordChange}
        />
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
