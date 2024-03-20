import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};


export const calculateReadingTime = (content: string) => {
  const wordsPerMinute = 200;
  const words = content.split(/\s/g).length;
  const minutes = words / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `${readTime} min read`;
}