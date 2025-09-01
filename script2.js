// ===============================
// Part 1: Basics (Variables + Conditionals)
// ===============================
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = document.getElementById("ageInput").value; // variable declaration
  let result = "";

  // conditional statement
  if (age >= 18) {
    result = "You are an adult.";
  } else if (age > 0) {
    result = "You are a minor.";
  } else {
    result = "Please enter a valid age.";
  }

  // Output result to the DOM
  document.getElementById("ageResult").textContent = result;
});

// ===============================
// Part 2: Functions (Reusability)
// ===============================

// Custom function: calculate total
function calculateTotal(a, b) {
  return a + b;
}

// Custom function: format string
function formatGreeting(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

// Use function when button is clicked
document.getElementById("calcTotalBtn").addEventListener("click", function () {
  let total = calculateTotal(3, 7);
  document.getElementById("calcResult").textContent =
    `Total is: ${total} | ${formatGreeting("Sean")}`;
});

// ===============================
// Part 3: Loops (Repetition)
// ===============================
let shoppingItems = ["Milk", "Bread", "Eggs", "Apples", "Juice"];

document.getElementById("listItemsBtn").addEventListener("click", function () {
  let list = document.getElementById("shoppingList");
  list.innerHTML = ""; // clear list before adding

  // Example of for loop
  for (let i = 0; i < shoppingItems.length; i++) {
    let li = document.createElement("li");
    li.textContent = shoppingItems[i];
    list.appendChild(li);
  }

  // Example of while loop (countdown)
  let countdown = 5;
  console.log("Countdown starts:");
  while (countdown > 0) {
    console.log(countdown);
    countdown--;
  }
});

// ===============================
// Part 4: DOM Manipulation
// ===============================
let toggle = true;

document.getElementById("toggleTextBtn").addEventListener("click", function () {
  let text = document.getElementById("toggleText");

  // toggle visibility
  if (toggle) {
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
  toggle = !toggle;
});

// Add new items dynamically
document.getElementById("addItemBtn").addEventListener("click", function () {
  let list = document.getElementById("dynamicList");

  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);

  list.appendChild(newItem);
});
