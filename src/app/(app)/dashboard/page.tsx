import PageContainer from "@/components/(app)/page-container";
import { db } from "@/db";
import { user } from "@/db/schema";
import React from "react";

const DahsboardPage = async () => {
  const allUsers = await db.select().from(user);
  return (
    <PageContainer title="Dashboard">{allUsers.length} users</PageContainer>
  );
};

export default DahsboardPage;
