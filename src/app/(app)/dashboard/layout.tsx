import Icon from "@/components/Icon";
import ThemeSwitcher from "@/components/theme-switcher";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface Props {
  children: React.ReactNode;
}

const navItems = [
  {
    title: "Main Menu",
    items: [
      { name: "Dashboard", icon: "LayoutDashboard", href: "/dashboard" },
      { name: "Tasks", icon: "CalendarCheck", href: "/tasks" },
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

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen dark:bg-neutral-950 bg-neutral-200 md:p-3">
      <div className="w-52 pr-3 h-full flex flex-col justify-between ">
        <div className="">
          <div className="flex h-20 rounded-xl bg-white p-4 shadow-md">
            <div className=" bg-black rounded size-12 flex justify-center items-center mr-2">
              <span className="text-4xl font-bold">Q</span>
            </div>
            <div className="overflow-hidden">
              <div className="text-black text-lg">QuickStats</div>
              <p className="text-xs text-gray-500 text-nowrap truncate">
                Bloemfontein, South Africa
              </p>
            </div>
          </div>
          <nav className="mt-8 gap-4 flex flex-col">
            {navItems.map((item, index) => (
              <Fragment key={item.title}>
                <div className="mt-4">
                  <div className="text-sm text-gray-600">{item.title}</div>
                  <ul className="mt-2 ml-2 space-y-2">
                    {item.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="flex items-center px-4 py-2 mr-2 text-neutral-900 dark:text-gray-400 dark:hover:bg-gray-100 hover:bg-gray-500 hover:text-gray-100 dark:hover:text-gray-900 rounded duration-200"
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
          </nav>
        </div>
        <div className="mb-2">
          <ThemeSwitcher />
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center bg-gray-900 size-10 mr-2 rounded-full font-black text-md p-5">
              A.M
            </div>
            <div className="text-nowrap">
              <div className="text-sm dark:text-gray-200 text-neutral-900">
                Arthurncious Monethi
              </div>
              <div className="text-xs text-gray-500">
                arthurnacious@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-5 bg-white flex-1 md:rounded-xl text-gray-800 ">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
