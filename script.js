let score = 0;
const foodList = [];
const scoreDisplay = document.getElementById('score');
const foodListDisplay = document.getElementById('food-list');

document.getElementById('food-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const foodSelect = document.getElementById('food-select');
  const value = parseInt(foodSelect.value);
  const text = foodSelect.options[foodSelect.selectedIndex].text;

  if (value === 0 && text === "") return;

  foodList.push({name: text, value: value});
  score += value;

  // Update display
  scoreDisplay.textContent = score;

  const li = document.createElement('li');
  li.textContent = `${text} (Plaque points: ${value})`;
  foodListDisplay.appendChild(li);

  // Reset select
  foodSelect.value = "";
});
