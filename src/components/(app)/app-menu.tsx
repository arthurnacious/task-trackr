"use client";
import React, { FC, Fragment, useEffect, useRef } from "react";
import Icon from "@/components/Icon";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "../theme-switcher";
import { cn } from "@/lib/utils";
import { useSession } from "@/lib/auth-client";
import { Skeleton } from "@/components/ui/skeleton";
import TenantSelect from "@/components/(app)/tenant-select";
import { getInitials } from "@/lib/helpers/string";

interface Props {}

const navItems = [
  {
    title: "Main Menu",
    items: [
      { name: "Dashboard", icon: "LayoutDashboard", href: "/dashboard" },
      { name: "Projects", icon: "FolderRoot", href: "/projects" },
      { name: "Schedule", icon: "AlarmClock", href: "/schedule" },
      { name: "Employees", icon: "Users", href: "/users" },
    ],
  },
  {
    title: "Settings",
    items: [
      { name: "Settings", icon: "Settings", href: "/settings" },
      { name: "Profile", icon: "UserCircle", href: "/profile" },
      { name: "Report", icon: "Clipboard", href: "/report" },
    ],
  },
];

const AppMenu: FC<Props> = ({}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: session, isPending } = useSession();

  const toggleMenu = () => setIsOpen(!isOpen);

  const appMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        appMenuRef.current &&
        !appMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          "md:hidden absolute z-10",
          isOpen ? "top-4 right-2" : "top-4 left-4",
          "duration-300"
        )}
        ref={appMenuRef}
      >
        <button
          onClick={toggleMenu}
          className="focus:outline-none p-2 rounded-lg bg-slate-100 dark:bg-neutral-900 hover:bg-slate-200 dark:hover:bg-neutral-950 duration-300 text-neutral-950 dark:text-white"
        >
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
      <div
        className={cn(
          "fixed md:static z-20",
          !isOpen && "-translate-x-full",
          "md:translate-x-0 w-56 h-screen md:h-full md:flex flex-col justify-between duration-300 bg-inherit px-3 md:pr-8"
        )}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="">
            <TenantSelect />
            <nav>
              <div className="mt-8 gap-4 flex-col flex">
                {navItems.map((item, index) => (
                  <Fragment key={item.title}>
                    <div className="mt-4">
                      <div className="text-sm text-gray-400">{item.title}</div>
                      <ul className="mt-2 ml-2 space-y-2">
                        {item.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="flex items-center px-4 py-2 mr-2 text-neutral-500 dark:text-gray-100 dark:hover:bg-neutral-800 hover:bg-gray-500 hover:text-gray-100 dark:hover:text-white rounded duration-300"
                            >
                              <Icon
                                iconName={item.icon}
                                size={17}
                                className="mr-2"
                              />
                              <span className="text-md">{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {navItems.length - 1 !== index && (
                      <div className="h-[1px] dark:bg-gray-600 bg-gray-400" />
                    )}
                  </Fragment>
                ))}
              </div>
            </nav>
          </div>
          <div className="mb-2">
            <ThemeSwitcher />
            {isPending ? (
              <div className="flex justify-between items-center">
                <div className="flex items-center justify-center bg-gray-900 size-10 mr-2 rounded-full font-black text-md p-5">
                  <Skeleton className="h-6 w-6 rounded-full" />
                </div>
                <div className="text-nowrap">
                  <div className="text-sm dark:text-gray-200 text-neutral-500">
                    <Skeleton className="h-4 w-32" />
                  </div>
                  <div className="text-xs text-gray-500">
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <div className="flex items-center justify-center bg-gray-900 size-10 mr-2 rounded-full font-black text-md p-5">
                  {session && getInitials(session.user.name)}
                </div>
                <div className="text-nowrap">
                  <div className="text-sm dark:text-gray-200 text-neutral-500">
                    {session?.user.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {session?.user.email}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppMenu;
