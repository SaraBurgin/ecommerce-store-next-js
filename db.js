const products = [
  {
    name: 'Rogue River Blue, USA',
    id: '0',
    price: '37€/Kg',
    description:
      "Fending off competition from cheesemakers who have been operating in Europe for centuries is no easy task. Yet American producer Rogue Creamery of Oregon did just that to be crowned the world's best cheese... We can't deny the complexity of this nine to 11-month-matured cows’ milk cheese. Wrapped in Syrah grape leaves and soaked in pear liqueur, it balances sweet and spicy.",

    image: '/images/rogueriverblue.jpg',
    url: './products/0',
  },
  {
    name: 'Parmigiano Reggiano, ITALY',
    id: '1',
    price: '35€/Kg',
    description:
      'Loved globally, not just in Italy. A hard, granular cows’ milk cheese produced exclusively in the provinces of Parma, Reggio Emilia, Modena and parts of Mantua to the right of River Po, and Bologna to the left of River Reno. The winning variety was a 24-month aged Nazionale del Parmigiano Reggiano Latteria Sociale Santo Stefano from Parma. A real delight to the palette.',
    image: '/images/parmigianoreggiano.jpg',
    url: './products/1',
  },
  {
    name: 'Torta del Casar DOP, SPAIN',
    id: '2',
    price: '33€/Kg',
    description:
      "The third best cheese in the world is a Spanish Torta del Casar PDO from Quesería Doña Francisca, Cáceres, in western Spain. This is a completely natural cheese, elaborated through traditional methods using raw sheeps' milk, it’s matured for 60 days and has a slim, fine crust and a cream-like texture in the center making it perfect for spreading or adding to sauces. You can't miss it.",
    image: '/images/tortadelcasar.jpg',
    url: './products/2',
  },
];

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find(product => product.id === id);
}
