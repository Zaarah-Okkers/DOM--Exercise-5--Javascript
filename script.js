const generateButton = document.getElementById("generateButton");

const resetButton = document.getElementById("resetButton");
const spellArea = document.getElementById("spellArea");
const ingredients = document.querySelectorAll("#ingredientsList li");

// Generate Spell with countdown
generateButton.addEventListener("click", () => {
  let count = 3;

  spellArea.textContent = count;

  const countdown = setInterval(() => {
    count--;

    if (count > 0) {
      spellArea.textContent = count;
    } else {
      clearInterval(countdown);

      // Pick random ingredient
      const randomIndex = Math.floor(Math.random() * ingredients.length);
      const spell = ingredients[randomIndex].textContent;

      spellArea.textContent = "✨Spell: " + spell + "✨";

      // Random pink-ish color
      spellArea.style.backgroundColor =
        "hsl(" + Math.random() * 360 + ", 100%, 90%)";

      spellArea.style.boxShadow =
        "0 0 25px rgba(255, 105, 180, 0.8)";
    }
  }, 1000);
});

// Reset button
resetButton.addEventListener("click", () => {
  spellArea.textContent = "✨Your spell will appear here✨";
  spellArea.style.backgroundColor = "#fff0f5";
  spellArea.style.boxShadow = "0 0 20px rgba(255, 105, 180, 0.5)";
});