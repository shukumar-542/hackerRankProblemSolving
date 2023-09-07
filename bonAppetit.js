
function bonAppetit(bill, k, b) {
    // Write your code here
    let chargedBill = 0;
    for(let i=0; i<bill.length; i++){
      chargedBill = chargedBill+ bill[i] /2 
    }
    let actualBill = 0;
    for(let j=0; j<bill.length; j++){
      actualBill = actualBill+ bill[j] 
    }
    let result =( actualBill - bill[k]) /2
    // let payableBill = chargedBill - result;
    // return payableBill
    // console.log(payableBill)
    if(b-result=== 0) {
        console.log('Bon Appetit')
    }else{
        console.log(b-result)
    }
     

}