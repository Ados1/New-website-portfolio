"use client";

export default function myImageLoader({ src, width, quality }) {
  return "https://emmanuel-portfolio.com/${src?w=${width}&q=${quality || 75}";
}
