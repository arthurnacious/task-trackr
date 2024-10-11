"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

interface Props {
  JustIcons?: boolean;
}

const ThemeSwitcher = ({ JustIcons }: Props) => {
  const { setTheme, theme } = useTheme();

  const doTheChange = () => {
    setTheme(() => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className="flex items-center justify-center border border-neutral-300 rounded-lg p-2 dark:border-neutral-400 mb-5 cursor-pointer"
      onClick={() => doTheChange()}
    >
      <div className="flex items-center justify-center size-8 text-neutral-500 dark:text-white">
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </div>
      {!JustIcons && (
        <div className="ml-2 text-neutral-600 dark:text-white">
          <span className="dark:hidden">Light</span>
          <span className="hidden dark:inline">Dark</span> Mode
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
