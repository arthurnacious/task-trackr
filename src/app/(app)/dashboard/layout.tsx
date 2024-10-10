import AppMenu from "@/components/(app)/app-menu";
import ThemeSwitcher from "@/components/theme-switcher";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen dark:bg-neutral-950 bg-neutral-200 md:p-3">
      <AppMenu />
      <div className="px-4 py-5 bg-white dark:bg-neutral-800 flex-1 md:rounded-xl text-gray-800 dark:text-gray-100">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
