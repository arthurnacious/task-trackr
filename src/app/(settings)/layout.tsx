import AnimatedContainer from "@/components/(auth)/animated-container";
import { isLoaggedIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: FC<Props> = async ({ children }) => {
  const canAccess = await isLoaggedIn();

  if (!canAccess) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-700 from-neutral-100 to-neutral-300" />
      <AnimatedContainer>{children}</AnimatedContainer>
    </div>
  );
};

export default AuthLayout;
