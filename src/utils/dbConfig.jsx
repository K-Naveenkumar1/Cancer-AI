import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:Mh4CsQepYdS3@ep-polished-queen-a5x5va2c-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
);
export const db = drizzle(sql, { schema });
