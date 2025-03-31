import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to combine class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
