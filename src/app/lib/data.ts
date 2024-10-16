import { createClient, sql } from "@vercel/postgres";

export async function connectToDB() {
  const client = createClient();
  await client.connect();
  try {
    if (client) {
      console.log("Connected to database");
      return client;
    }
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}

export async function getPosts() {
  try {
    const data = await sql`
    SELECT * FROM posts LIMIT 3`;
    console.log(data.rows);

    return data.rows;
  } catch (error) {
    console.log(error);
  }
}
