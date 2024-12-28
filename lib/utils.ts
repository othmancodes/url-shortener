// Importing the `clsx` utility function and `ClassValue` type from the `clsx` library
// `clsx` is used to conditionally join class names together
import { clsx, type ClassValue } from "clsx"

// Importing `twMerge` from the `tailwind-merge` library
// `twMerge` is used to intelligently merge Tailwind CSS class names, resolving conflicts
import { twMerge } from "tailwind-merge"

// Function `cn` which combines `clsx` and `twMerge` to handle class names
export function cn(...inputs: ClassValue[]) {
  // `clsx` combines all provided class names, handling conditions like arrays or objects
  // `twMerge` is then used to merge the Tailwind class names and resolve any conflicts
  return twMerge(clsx(inputs))
}
