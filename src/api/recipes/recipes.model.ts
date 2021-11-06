export const RecipeArticle = [
  {
    id: 1,
    title: "Filipino Gravy",
    seoDescription: "Filipino style gravy!",
    seoUrl: "filipino-gravy",
    body: "This is my version of gravy, Filipino Style",
    recipe: {
      title: "Gravy",
      description: "For the perfect chicken gravy",
      ingredients: [
        {
          id: 1,
          amount: { value: 1, unit: "tbsp" },
          name: "All-purpose flour",
        },
        { id: 2, amount: { value: 3, unit: "tbsp" }, name: "Oil" },
        { id: 3, amount: { value: 1, unit: "cup" }, name: "Water" },
        {
          id: 4,
          amount: { value: 0.5, unit: "cube" },
          name: "Chicken bouillon",
        },
        { id: 5, amount: { value: 3 }, name: "Calamansi" },
        {
          id: 6,
          amount: { value: 2, unit: "tbsp" },
          name: "Knorr Liquid Seasoning",
        },
        { id: 8, amount: { value: 3, unit: "cloves" }, name: "Garlic" },
      ],
      steps: [
        { id: 1, value: "Preheat oil in a pan." },
        {
          id: 2,
          value:
            "Once heated, add in the chopped garlic and saute until fragrant. Remove garlic from the oil and set aside in a bowl.",
        },
        {
          id: 3,
          value:
            "To make the roux, with your garlic oil, add in the flour and stir until brown.",
        },
        {
          id: 4,
          value:
            "Once the roux has browned, gradually add in the water and chicken bouillon cube and stir until the cube has dissolved and the mixture turns thick.",
        },
        {
          id: 5,
          value:
            "Add in the calamansi juice and the Liquid Seasoning. Adjust the seasonings to taste.",
        },
        {
          id: 6,
          value:
            "Once satisfied, add back your chopped garlic into the mixture and stir.",
        },
        { id: 7, value: "Turn off the heat and serve on a bowl." },
      ],
    },
  },
  {
    id: 2,
    title: "Best Korean Side Dish",
    seoDescription: "This side dish will make your heart yell yum.",
    seoUrl: "best-korean-side-dish",
    body: "We have lots of korean side dishes, but for today, let me introduce you to an all new best selling secret ingredient to korean banchan.",
    recipe: {
      title: "Fishcake",
      description: "A must have",
      ingredients: [
        {
          id: 1,
          amount: { value: 1, unit: "sheet" },
          name: "Fish cake",
        },
        { id: 2, amount: { value: 3, unit: "tbsp" }, name: "Gochugaru" },
        { id: 3, amount: { value: 1, unit: "tbsp" }, name: "Oil" },
      ],
      steps: [
        { id: 1, value: "Preheat oil in a pan." },
        {
          id: 2,
          value: "In a chopping board, chop fish cake into squares",
        },
        {
          id: 3,
          value: "Fry the fish cakes until brown",
        },
        {
          id: 4,
          value: "Once the fish cakes have browned, add in the gochugaru.",
        },
        {
          id: 5,
          value: "Serve in a small plate and enjoy.",
        },
      ],
    },
  },
];
