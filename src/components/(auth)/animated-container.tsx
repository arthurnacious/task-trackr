"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/logo";

interface Props {
  children: React.ReactNode;
}

const AnimatedContainer: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-screen md:h-auto md:w-full max-w-md p-8 rounded-lg shadow-xl dark:bg-neutral-900 bg-white"
    >
      <div className="flex flex-col justify-center items-center">
        <Logo withSlogan />
      </div>
      <main className="mt-5">{children}</main>
    </motion.div>
  );
};

export default AnimatedContainer;
