"use client";

export default function myImageLoader({ src, width, quality }) {
  return "https://emmanueladodoadjie-oksqfxr57-ados1s-projects.vercel.app/${src?w=${width}&q=${quality || 75}";
}
