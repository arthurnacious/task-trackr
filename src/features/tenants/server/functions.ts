"use server";

import { db } from "@/db";
import { tenant, tenantMember } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { toTitleCase } from "@/lib/helpers/string";
import slugify from "slugify";

export const createTenant = async ({
  json: { name },
}: {
  json: { name: string };
}) => {
  const slug = slugify(name);
  const [newTenant] = await db
    .insert(tenant)
    .values({
      name: toTitleCase(name),
      slug,
    })
    .returning();

  return newTenant;
};

export const joinTenant = async ({
  userId,
  tenantId,
}: {
  userId: string;
  tenantId: number;
}) => {
  const [existingTenantMember] = await db
    .select()
    .from(tenantMember)
    .where(
      and(eq(tenantMember.userId, userId), eq(tenantMember.tenantId, tenantId))
    )
    .limit(1);

  if (tenantMember) {
    return existingTenantMember;
  }

  const newTenantMember = await db
    .insert(tenantMember)
    .values({
      tenantId: tenantId,
      userId: userId,
    })
    .returning();

  return newTenantMember;
};

export const getTenantByInviteCode = async ({
  inviteCode,
}: {
  inviteCode: string;
}) => {
  const [foundTenant] = await db
    .select()
    .from(tenant)
    .where(eq(tenant.inviteCode, inviteCode))
    .limit(1);

  return foundTenant;
};
