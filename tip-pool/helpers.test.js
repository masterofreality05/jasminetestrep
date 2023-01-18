describe('helper functions testing with tear down where applicable',function(){

   it("should accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects'",function(){
   allPayments = {payment1: {billAmt: '500', tipAmt: '50', tipPercent: 10}
    ,payment2: {billAmt: '400', tipAmt: '50', tipPercent: 10}
    }

    expect(sumPaymentTotal('billAmt')).toEqual(900)});

    it('converts the bill and tip amount into a tip percent',function(){

        let bill = 100;
        let tip = 20;

        expect(calculateTipPercent(bill,tip)).toEqual(20)}
        );

     it('expects a table row element, appends a newly created td element from the value',function(){
        let newRow = document.createElement('tr')
        let value = 'newvalue'

        appendTd(newRow,value);

        expect(newRow.innerText).toEqual(value)

        newRow.innerText = ''

        newRow.remove()
        

        
        
        
     })   

  
    




    afterEach(function(){
        allpayments = {};
    })

})