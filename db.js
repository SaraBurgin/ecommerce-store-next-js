require('dotenv').config();
const postgres = require('postgres');

//I want to declare a new constant (sql) the result is based on wether the DATABASE_URL is available. If it is available, I want to use it if not I call postgres as empty function. 
// Process.env.DATABASE_URL is how we access the db to check if it is available.

// postgres://yydedovnqwhcxo:dc3db946c41c79323413dcec88977a837ba425ce1f8c524d99326effa5066e30@ec2-54-246-85-151.eu-west-1.compute.amazonaws.com:5432/d50omsndhmm425

const sql = process.env.DATABASE_URL
  ? postgres(process.env.DATABASE_URL, { ssl: { rejectUnauthorized: false } })
  : postgres();

export async function getAllProducts() {
  const products = await sql`
  SELECT * FROM products;
  `;
  return products;
}

export async function getProductById(id) {
  const products = await sql`
    SELECT * FROM products
    WHERE id = ${id}
  `;
  return products[0];
}