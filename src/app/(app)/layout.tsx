import AppMenu from "@/components/(app)/app-menu";
import { isLoaggedIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const AppLayout: FC<Props> = async ({ children }) => {
  const canAccess = await isLoaggedIn();

  if (!canAccess) {
    redirect("/sign-in");
  }

  return (
    <div className="flex w-screen dark:bg-neutral-950 bg-neutral-200 md:p-3">
      <AppMenu />
      <div className="px-4 py-5 min-h-screen md:min-h-[calc(100dvh-2.5rem)] bg-white dark:bg-neutral-800 flex-1 md:rounded-xl text-gray-800 dark:text-gray-100">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
