import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
  varchar,
  pgEnum,
  index,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull().default(false),
  hashedPassword: text("hashedPassword"),
  image: text("image"),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expiresAt").notNull(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId")
    .notNull()
    .references(() => user.id),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => user.id),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  expiresAt: timestamp("expiresAt"),
  password: text("password"),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
});

export const tenant = pgTable(
  "tenant",
  {
    id: integer("id").primaryKey(),
    name: varchar("name").notNull(),
    slug: varchar("slug").notNull(),
    createdAt: timestamp("createdAt").defaultNow(),
    updatedAt: timestamp("updatedAt").defaultNow(),
  },
  (tenant) => ({
    slugIndex: index("tenant_slug_index").on(tenant.slug), // Index the slug column
  })
);

const roleEnum = pgEnum("varchar", ["ADMIN", "PARTICIPANT"]);
export const tenantMember = pgTable("tenant_member", {
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  tenantId: integer("tenant_id")
    .notNull()
    .references(() => tenant.id), // Foreign key referencing tenant.id
  role: roleEnum("role").default("PARTICIPANT").notNull(),
});

export const project = pgTable(
  "project",
  {
    id: integer("id").primaryKey(),
    tenantId: integer("tenant_id")
      .notNull()
      .references(() => tenant.id),
    name: varchar("name").notNull(),
    slug: varchar("slug").notNull(),
    expiresAt: timestamp("expiresAt"),
    createdAt: timestamp("createdAt").defaultNow(),
    updatedAt: timestamp("updatedAt").defaultNow(),
  },
  (tenant) => ({
    slugIndex: index("project_slug_index").on(tenant.slug), // Index the slug column
  })
);

const taskStatusEnum = pgEnum("varchar", [
  "BACKLOG",
  "TODO",
  "IN_PROGRESS",
  "IN_REVIEW",
  "COMPLETED",
]);
export const task = pgTable("task", {
  id: integer("id").primaryKey(),
  projectId: integer("project_id")
    .notNull()
    .references(() => project.id),
  name: varchar("name").notNull(),
  status: taskStatusEnum("status").default("IN_PROGRESS").notNull(),
  assigneeId: text("assignee_id").references(() => user.id),
  description: text("description"),
  dueDate: timestamp("due_date"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
