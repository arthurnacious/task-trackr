// Generated by Xata Codegen 0.30.1. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "users",
    checkConstraints: {},
    foreignKeys: {},
    primaryKey: ["id"],
    uniqueConstraints: {
      users_email_unique: { name: "users_email_unique", columns: ["email"] },
    },
    columns: [
      {
        name: "email",
        type: "string",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "hashedPassword",
        type: "string",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "id",
        type: "int",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "name",
        type: "string",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Users = InferredTypes["users"];
export type UsersRecord = Users & XataRecord;

export type DatabaseSchema = {
  users: UsersRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Arthurnacious-s-workspace-kh182r.eu-west-1.xata.sh/db/task-trackr",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
