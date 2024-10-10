import PageFooter from "@/components/(pages)/page-footer";
import PageMenu from "@/components/(pages)/page-menu";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <PageMenu />
      {children}
      <PageFooter />
    </>
  );
};

export default PageLayout;
