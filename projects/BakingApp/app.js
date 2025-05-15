// Dessert "database" - this is your fake data for now
const desserts = [
  {
    name: "Strawberry Shortcake",
    steps: [
      "Preheat oven to 350°F.",
      "Mix flour, sugar, and baking powder.",
      "Add butter and milk, stir until soft dough forms.",
      "Bake for 15 minutes.",
      "Top with whipped cream and strawberries!"
    ]
  },
  {
    name: "Chocolate Chip Cookies",
    steps: [
      "Preheat oven to 375°F.",
      "Cream together butter and sugar.",
      "Add eggs and vanilla.",
      "Stir in flour and chocolate chips.",
      "Drop spoonfuls on baking sheet and bake for 10 minutes."
    ]
  }
];

// Get the dessert section and buttons
const dessertCard = document.querySelector(".dessert-card");
const bakeBtn = document.getElementById("bakeModeBtn");
const viewBtn = document.getElementById("viewRecipeBtn");

// Pick a random dessert (simulate "Dessert of the Day")
const todayDessert = desserts[Math.floor(Math.random() * desserts.length)];

// Show the name
dessertCard.querySelector("h3").textContent = todayDessert.name;

// When "View Recipe" is clicked, show the steps
viewBtn.addEventListener("click", () => {
  const recipeSteps = todayDessert.steps.map((step, i) => `<li>Step ${i + 1}: ${step}</li>`).join("");
  dessertCard.innerHTML += `<ul>${recipeSteps}</ul>`;
});
