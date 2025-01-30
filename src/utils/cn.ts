import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// this function is used to merge the classes to ensure the classes are applied correctly
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
