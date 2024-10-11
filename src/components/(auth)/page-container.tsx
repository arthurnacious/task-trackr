import React, { FC } from "react";

interface Props {
  children?: React.ReactNode;
}

const PageContainer: FC<Props> = ({ children }) => {
  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-8 bg-white rounded-xl shadow-md dark:bg-neutral-900">
      {children}
    </div>
  );
};

export default PageContainer;
