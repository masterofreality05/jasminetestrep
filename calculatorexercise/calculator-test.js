
it('should calculate the monthly rate correctly', function () {
  const testvalues = {
    amount: 400,
    years: 2,
    rate: 10
  }

  expect(calculateMonthlyPayment(testvalues)).toEqual('20.00');



  
});

it('should calculate the monthly rate correctly', function () {
  const testvalues = {
    amount: 0,
    years: 0,
    rate: 0
  }

  expect(calculateMonthlyPayment(testvalues)).toEqual('NaN');



  
});


it("should return a result with 2 decimal places", function() {

  const testvalues = {
    amount: 400,
    years: 2,
    rate: 10
  }
  expect(calculateMonthlyPayment(testvalues)).toEqual('20.00');
  
 
});

