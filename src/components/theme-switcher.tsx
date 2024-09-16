"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  const doTheChange = () => {
    setTheme(() => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex gap-5 items-center">
      <Button
        variant="outline"
        className="dark:bg-neutral-950 bg-gray-700 mb-5"
        size="icon"
        onClick={() => doTheChange()}
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <div>
        Mode: <span className="dark:hidden">Dark</span>
        <span className="hidden dark:inline">Light</span>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
