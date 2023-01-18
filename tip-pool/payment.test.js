describe('Add a curPayment object to allPayments, update html and reset input values logic',function(){

beforeEach(function(){
    
    billAmtInput.value = 100;
tipAmtInput.value = 20;


})

it('should update all payments object', function(){
 submitPaymentInfo()


expect(Object.keys(allPayments)[0]).toEqual('payment1')

let oneRow = document.querySelector('#payment1');
oneRow.remove()


})



it('createCurPayment() will return undefined with negative or empty input',function(){
    billAmtInput.value = 0;
    tipAmtInput.value = 0;
    
    expect(createCurPayment()).toEqual(undefined)
    
    billAmtInput.value = 100;
    tipAmtInput.value = 20; 
})

it('bill should not be 0 but tip can be 0', function(){
    billAmtInput.value = 100;
    tipAmtInput.value = 0;

    let expectedPay = {
        billAmt: '100',
        tipAmt: '0',
        tipPercent: 0,
      }

    expect(createCurPayment()).toEqual(expectedPay);

});
    
    
       
it('should append a new payment to the payment table',function(){

submitPaymentInfo()

let oneRow = document.querySelector('#payment1');

expect(paymentTbody.childElementCount).toEqual(1);


allPayments = {};

oneRow.remove()


})

it('should create table row element and pass to appendTd with calculated sum of all payment', function(){

   let allPayments = {payment1: {billAmt: '100', tipAmt: '10', tipPercent: 10}
    ,payment2: {billAmt: '400', tipAmt: '40', tipPercent: 10}

    }

    let tipPercentAvg = 0;
  
  updateSummary()
  expect(summaryTds[0].innerHTML).toEqual('$' + sumPaymentTotal(billAmt));
  expect(summaryTds[1].innerHTML).toEqual('$' + sumPaymentTotal(tipAmt));
  expect(summaryTds[2].innerHTML).toEqual(Math.round(tipPercentAvg) + '%');
})

afterEach(function(){
    
    billAmtInput.value = '';
    tipAmtInput.value = '';
    allPayments = {}
    paymentId = 0;
    summaryTds[0].innerHTML = 0;
    summaryTds[1].innerHTML = 0;
    summaryTds[2].innerHTML = '';
    
    
    //testing that the reset values have been reset to empty
   
})

it('should reset input values to default',function(){
    billAmtInput.value = '';
    tipAmtInput.value = '';
    expect(billAmtInput.value).toEqual('');
    expect(tipAmtInput.value).toEqual('');
    });



})
