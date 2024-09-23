function getInputValueById(id){
    return parseFloat(document.getElementById(id).value)
}


//  Noakhali donate 
const noakhaliDonateButton =document.getElementById('noakhali-donate-button');

noakhaliDonateButton.addEventListener('click',function(){
    const noakhaliInputValue = getInputValueById('noakhali-donate-input');   
  
    //alert
    if(isNaN(noakhaliInputValue) || noakhaliInputValue < 0){
        alert('Invalid Donation Amount')
    }
    else{
       alert('Your Donate Successfully done')
    }

    //noakhali-donate-amount
    const noakhaliDonateAmountValue = document.getElementById('noakhali-donate-amount');
    const currentDonateAmount = parseFloat(noakhaliDonateAmountValue.innerText);

    const newAmountAdd = currentDonateAmount + parseFloat(noakhaliInputValue);
    noakhaliDonateAmountValue.innerText = newAmountAdd;
    
    //my balance less
    const totalMyBalanceLess = document.getElementById('total-balance');
    const newTotalMyBalance = parseFloat(totalMyBalanceLess.innerText) -  noakhaliInputValue ;
    totalMyBalanceLess.innerText = newTotalMyBalance;
    //



})


