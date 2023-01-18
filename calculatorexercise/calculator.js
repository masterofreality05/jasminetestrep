window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update()
     
    });
  }
});

function getCurrentUIValues() {
  
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}
  




// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 400;
  document.getElementById("loan-years").value = 2;
  document.getElementById("loan-rate").value = 10;


}

// Get the current values from the UI
// Update the monthly payment
function update(input) {
updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

let amount = parseInt(values.amount);
let years = parseInt(values.years);
let rate = parseInt(values.rate);
let interest = (((amount / 100) * rate) * years);
let totalAmount = amount + interest;
console.log(totalAmount);
let monthlyRate = ((totalAmount / values.years) / 12);

let decimaled = monthlyRate.toFixed(2)
console.log(typeof decimaled)

return decimaled
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlySpan = document.getElementById('monthly-payment')
  monthlySpan.innerText = monthly;

}
