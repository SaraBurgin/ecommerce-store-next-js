exports.up = async (sql) => {
  console.log('Creating products table...');
  await sql`
  CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL NOT NULL
  );
  `;
};

exports.down = async (sql) => {
  console.log('Dropping products table...');
  await sql`
  DROP TABLE products;
`;
};
