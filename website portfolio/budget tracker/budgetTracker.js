let input1 = document.getElementById("description"); //input for description
let input2 = document.getElementById("amount"); //input for money amount

let myButton1 = document.getElementById("income"); //button for income
let myButton2 = document.getElementById("expense"); //button for expenses
let resetBtn = document.getElementById("reset");

let moneyEarned = document.getElementById("moneyEarned");
let moneyAvailable = document.getElementById("moneyAvailable");
let moneySpent = document.getElementById("moneySpent");

let ulIncome = document.getElementById("ulIncome");
let ulExpense = document.getElementById("ulExpense");

let finalEarned = 0;
let finalAvailable = 0;
let finalSpent = 0;

myButton1.addEventListener("click", function () {
  if (input1.value.length === 0 || input2.value.length === 0) {
    alert("Both description and amount fields are required.");
  } else {
    finalEarned += parseInt(input2.value);
    moneyEarned.innerHTML = finalEarned;
    finalAvailable += parseInt(input2.value);
    moneyAvailable.innerHTML = finalAvailable;
    ulIncome.innerHTML += `<li id="ulIncome">${input1.value} € ${input2.value}</li>`;
    input1.value = "";
    input2.value = "";
  }
});

myButton2.addEventListener("click", function () {
  if (input1.value.length === 0 || input2.value.length === 0) {
    alert("Both description and amount fields are required.");
  } else {
    finalAvailable -= parseInt(input2.value);
    moneyAvailable.innerHTML = finalAvailable;
    finalSpent += parseInt(input2.value);
    moneySpent.innerHTML = finalSpent;
    ulExpense.innerHTML += `<li id="ulExpense">${input1.value} € ${input2.value}</li>`;
    input1.value = "";
    input2.value = "";
  }
});

resetBtn.addEventListener("click", function () {
  moneyEarned.innerHTML = 0;
  moneyAvailable.innerHTML = 0;
  moneySpent.innerHTML = 0;
  document.getElementById("ulIncome").innerHTML = "";
  document.getElementById("ulExpense").innerHTML = "";
  document.getElementById("description").value = "";
  document.getElementById("amount").value = "";
});
