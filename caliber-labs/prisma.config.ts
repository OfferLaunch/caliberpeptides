// Load env the same way as Next.js: .env then .env.local (local wins).
// Default dotenv/config only reads .env, so DATABASE_URL in .env.local was ignored.
import { config as loadEnv } from "dotenv";
import { resolve } from "node:path";
import { defineConfig } from "prisma/config";

const root = process.cwd();
loadEnv({ path: resolve(root, ".env") });
loadEnv({ path: resolve(root, ".env.local"), override: true });

const databaseUrl = process.env["DATABASE_URL"];
if (!databaseUrl?.trim()) {
  throw new Error(
    "DATABASE_URL is missing. Add your Supabase connection string to caliber-labs/.env.local (see Supabase → Settings → Database → URI)."
  );
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: databaseUrl,
  },
});