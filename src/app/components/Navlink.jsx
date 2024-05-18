/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

const Navlink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 hover:bg-white hover:text-black ${
        pathName === link.url
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default Navlink;
