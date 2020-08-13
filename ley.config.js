const config = {
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  username: process.env.PGUSER,
  port: 5432,
  ssl: true
};
console.log('database configuration: ', config);

module.exports = {
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  username: process.env.PGUSER,
  port: 5432,
  ssl: true
}

