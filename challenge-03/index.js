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
const menu = dishes.filter((i) => {
  if (this.vegetarian === true) {
    return i.dishes.vegetarian, i.dishes.name;
  }
});
