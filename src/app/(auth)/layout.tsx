"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/logo";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center  ">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-700 from-neutral-100 to-neutral-300" />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 rounded-lg shadow-xl dark:bg-neutral-900 bg-white"
      >
        <div className="flex flex-col justify-center items-center">
          <Logo withSlogan />
        </div>
        <main className="mt-5">{children}</main>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
