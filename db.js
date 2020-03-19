require('dotenv').config();

const postgres = require('postgres');
const sql = postgres();

export async function getAllProducts() {
  const products = await sql`
  SELECT * FROM products;
  `;
  return products;
}
