"use server";
import { db } from "@/db";
import { user as userTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

export async function signIn(email: string, password: string) {
  const user = await db.query.user.findFirst({
    where: eq(userTable?.email, email),
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isValidPassword = bcrypt.compare(password, String(user.hashedPassword));

  if (!isValidPassword) {
    throw new Error("Invalid email or password");
  }

  return true;

  // Create a session for the user
  // const session = await createSession(user.id);

  // return { user, session };
}

export async function signUp(email: string, password: string, name: string) {
  const existingUser = await db.query.user.findFirst({
    where: eq(userTable?.email, email),
  });

  if (existingUser) {
    throw new Error("Email already in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await db
    .insert(userTable)
    .values({
      id: uuidv4(),
      email,
      hashedPassword,
      emailVerified: false,
      name,
    })
    .returning();

  // Create a session for the new user
  //   const newSession = await session(newUser.id);

  return { user: newUser };
}

export async function signOut(sessionId: string) {
  console.log(sessionId);
  // Implement session deletion logic here
  // This depends on how you're storing sessions
}
