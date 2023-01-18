
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects - test complete
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent - test complete
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value - test complete
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  
  tr.append(newTd);
  
  
  
}
