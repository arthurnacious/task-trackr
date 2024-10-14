import PageContainer from "@/components/(app)/page-container";
import { db } from "@/db";
import { users } from "@/db/schema";
import React from "react";

const user = {
  name: "Arthurnacious Monethi",
  email: "arthurnacious@gmail.com",
};

const DahsboardPage = async () => {
  const allUsers = await db.select().from(users);
  return (
    <PageContainer title="Dashboard">{allUsers.length} users</PageContainer>
  );
};

export default DahsboardPage;
