const products = [
  {
    name: 'Rogue River Blue, USA',
    price: 37.0,
    description:
      "Fending off competition from cheesemakers who have been operating in Europe for centuries is no easy task. Yet American producer Rogue Creamery of Oregon did just that to be crowned the world's best cheese... We can't deny the complexity of this nine to 11-month-matured cows’ milk cheese. Wrapped in Syrah grape leaves and soaked in pear liqueur, it balances sweet and spicy.",
  },
  {
    name: 'Parmigiano Reggiano, ITALY',
    price: 35.0,
    description:
      'Loved globally, not just in Italy. A hard, granular cows’ milk cheese produced exclusively in the provinces of Parma, Reggio Emilia, Modena and parts of Mantua to the right of River Po, and Bologna to the left of River Reno. The winning variety was a 24-month aged Nazionale del Parmigiano Reggiano Latteria Sociale Santo Stefano from Parma. A real delight to the palette.',
  },
  {
    name: 'Torta del Casar DOP, SPAIN',
    price: 33.0,
    description:
      "The third best cheese in the world is a Spanish Torta del Casar PDO from Quesería Doña Francisca, Cáceres, in western Spain. This is a completely natural cheese, elaborated through traditional methods using raw sheeps' milk, it’s matured for 60 days and has a slim, fine crust and a cream-like texture in the center making it perfect for spreading or adding to sauces. You can't miss it.",
  },
];

exports.up = async function(sql) {
  console.log('Inserting products in to products table...');

  await sql`
    INSERT INTO products ${sql(products, 'name', 'description', 'price')};
  `;
};

exports.down = async function(sql) {
  console.log('Deleting products from products table...');
  await sql`
    DELETE from products
      WHERE name in (${products.map(product => product.name)});

  `;
};
