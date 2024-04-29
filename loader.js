"use client";

export default function muyImageLoader({ src, width, quality }) {
  return "https://emmanuel-portfolio.com/${src?w=${width}&q=${quality || 75}";
}
