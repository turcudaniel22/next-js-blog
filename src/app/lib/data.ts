import { createClient } from "@vercel/postgres";

export async function connectToDB() {
  const client = createClient();
  await client.connect();
}
