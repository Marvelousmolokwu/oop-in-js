const dishes = [
  {
    name: "Eggplant parsean",
    vegetarian: true,
  },
  {
    name: "spagetti and meatball",
    vegetarian: false,
  },
];
const menu = dishes.filter((i) => i.dishes.vegetarian === true);
