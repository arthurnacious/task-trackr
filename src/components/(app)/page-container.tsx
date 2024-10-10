import React, { FC } from "react";

interface Props {
  title: string;
  sub?: string;
  children?: React.ReactNode;
}

const PageContainer: FC<Props> = ({ title, sub, children }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="border-b border-gray-400 pb-2">
        <div className="w-full flex md:block flex-col justify-between items-center">
          <h1 className="text-3xl font-bold font-iceberg uppercase text-neutral-600 dark:text-white ">
            {title}
          </h1>
          {sub && <p className="text-gray-500 text-sm italic">{sub}</p>}
        </div>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
};

export default PageContainer;
