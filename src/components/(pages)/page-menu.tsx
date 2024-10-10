"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

const PageMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <div className="fixed top-0 z-50 w-full">
      <nav className="bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <Logo />
            </Link>

            {/* Desktop Menu */}
            <div className="flex gap-2 items-center">
              <motion.div
                className="hidden md:flex space-x-6 order-last"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                  closed: {},
                }}
              >
                {menuItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="hover:text-teal-200 transition-colors"
                    variants={menuItemVariants}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden order-last">
                <button onClick={toggleMenu} className="focus:outline-none">
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X size={24} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu size={24} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
              <Button
                variant="secondary"
                className="order-1 md:order-last"
                asChild
              >
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-16 left-0 right-0 bg-teal-600 z-50 md:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="container mx-auto px-4 py-4">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block py-2 hover:text-teal-200 transition-colors"
                    variants={menuItemVariants}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default PageMenu;
