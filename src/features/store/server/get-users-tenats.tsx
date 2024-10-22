"use server";

import { db } from "@/db";
import { tenant, tenantMember } from "@/db/schema";
import { eq } from "drizzle-orm";

export const fetchUsersTenants = async (userId: string) => {
  const tenants = await db
    .select({
      id: tenant.id,
      name: tenant.name,
      slug: tenant.slug,
    })
    .from(tenantMember)
    .innerJoin(tenant, eq(tenantMember.tenantId, tenant.id))
    .where(eq(tenantMember.userId, userId));
  return tenants;
};
