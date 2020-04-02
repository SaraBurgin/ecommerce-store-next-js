require('dotenv').config();
const postgres = require('postgres');

//I want to declare a new constant (sql) the result is based on wether the dATABASE_URL is available. If it is available, I want to use it if not I call postgres as empty function.

const sql = process.env.DATABASE_URL
  ? postgres(process.env.DATABASE_URL, { ssl: { rejectUnauthorized: false } })
  : postgres();

export async function getAllProducts() {
  const products = await sql`
  SELECT * FROM products;
  `;
  return products;
}
