"use client";
import React, { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { google, facebook, github } from "@/components/logos";
import { cn } from "@/lib/utils";
import { signIn } from "@/lib/auth-client";

interface Props {
  className?: string;
}

type knownProviders = "google" | "facebook";

const buttons = [
  {
    name: "github",
    icon: github,
  },
  {
    name: "google",
    icon: google,
  },
  {
    name: "facebook",
    icon: facebook,
  },
];

const SocialSignIn: FC<Props> = ({ className }) => {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null); // Track loading for specific provider

  const signInWithProvider = async (provider: knownProviders) => {
    setLoadingProvider(provider);
    await signIn.social({ provider, callbackURL: "/dashboard" });
    setLoadingProvider(null);
  };

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)}>
      {buttons.map(({ name, icon }) => (
        <Button
          isLoading={loadingProvider === name}
          key={name}
          variant="outline"
          className="w-full flex items-center justify-center capitalize"
          onClick={() => signInWithProvider(name as knownProviders)}
        >
          <Image
            src={icon}
            alt={name}
            width={20}
            height={20}
            className="mr-2"
          />
          {name}
        </Button>
      ))}
    </div>
  );
};

export default SocialSignIn;
