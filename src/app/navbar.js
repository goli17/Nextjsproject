"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", text: "About" },
  { href: "/product", text: "Product" },
  { href: "/contact", text: "Contact" },
];

export const Navbar = () => {
  const path = usePathname();
  return (
    <div className="container mx-auto">
      <nav className="navbar bg-black  text-yellow-100 mb-5">
        <ul className="flex justify-center py-5  rounded-sm">
          {links.map((l) => (
            <li className="pr-[2.5rem]" key={l.href}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  className={`${
                    l.href === path ? "text-yellow-600 font-bold" : ""
                  } text-base`}
                  href={l.href}
                >
                  {l.text}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
