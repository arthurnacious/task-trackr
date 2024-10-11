"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Google from "@/components/logos/google.svg";
import Faceboook from "@/components/logos/facebook.svg";
import PageContainer from "@/components/(auth)/page-container";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(6, {
    message: "Name must be at least 6 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <PageContainer>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Sign up for an account
        </h3>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-300">
                  Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-300">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="email@domain.com"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-300">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="******"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white"
          >
            Sign Up
          </Button>
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-700" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500 dark:bg-neutral-900 dark:text-gray-400">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center"
          onClick={() => console.log("Google sign in")}
        >
          <Image
            src={Google}
            alt="Google"
            width={20}
            height={20}
            className="mr-2"
          />
          Google
        </Button>
        <Button
          variant="outline"
          className="w-full flex items-center justify-center"
          onClick={() => console.log("Facebook sign in")}
        >
          <Image
            src={Faceboook}
            alt="Faceboook"
            width={20}
            height={20}
            className="mr-2 p-[.15rem]"
          />
          Facebook
        </Button>
      </div>

      <div className="text-center text-sm">
        <Link
          href="/sign-in"
          className="font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
        >
          Already have an account?
        </Link>
      </div>
    </PageContainer>
  );
};

export default SignUp;
