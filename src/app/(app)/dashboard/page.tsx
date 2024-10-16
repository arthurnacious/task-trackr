import PageContainer from "@/components/(app)/page-container";
import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const DahsboardPage = async () => {
  const session = await auth.api.getSession({
    headers: headers(),
  });
  console.log({ session });
  return (
    <PageContainer title="Dashboard">{JSON.stringify(session)}</PageContainer>
  );
};

export default DahsboardPage;
