function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
}


function getPreviousMyBalance(id){
    return parseFloat(document.getElementById(id).innerText) || 0;
}


//Noakhali donate 
    const noakhaliDonateButton =document.getElementById('noakhali-donate-button');
    noakhaliDonateButton.addEventListener('click',function(){
    const noakhaliInputValue = getInputValueById('noakhali-donate-input');   
  
    //alert
    if(isNaN(noakhaliInputValue) || noakhaliInputValue < 0 || noakhaliInputValue === ''){
        alert('Invalid Donation Amount')
    }
    else{

        document.getElementById('my_modal_4').classList.remove('hidden');
        // document.getElementById('success-message').style.display = 'block';

    }


    //noakhali-donate-amount
    const noakhaliDonateAmountValue = document.getElementById('noakhali-donate-amount');
    const noakhaliCurrentDonateAmount = parseFloat(noakhaliDonateAmountValue.innerText);
        
    const newAmountAddNoakhali = noakhaliCurrentDonateAmount + parseFloat(noakhaliInputValue);
    noakhaliDonateAmountValue.innerText = newAmountAddNoakhali;
            
    //my balance less
    // const totalMyBalanceLess = document.getElementById('total-balance');
    // const newTotalMyBalance = parseFloat(totalMyBalanceLess.innerText) -  noakhaliInputValue ;
    // totalMyBalanceLess.innerText = newTotalMyBalance;
        
    

    const totalMyBalanceLess = getPreviousMyBalance('total-balance')
    const newTotalMyBalance = totalMyBalanceLess - parseFloat(noakhaliInputValue);
    document.getElementById('total-balance').innerText = newTotalMyBalance;
})



//Feni Donate
const feniDonationButton = document.getElementById('feni-donate-button');
feniDonationButton.addEventListener('click',function(){
    const feniInputValue = getInputValueById('feni-donate-input');

    //alert
    if(isNaN(feniInputValue) || feniInputValue < 0 || feniInputValue === ''){
        alert('Invalid Donation Amount')
    }

    else{
    document.getElementById('my_modal_4').classList.remove('hidden');
    // document.getElementById('success-message').style.display = 'block';

    }


    //noakhali-donate-amount
    const feniDonateAmountValue = document.getElementById('feni-donate-amount');
    const feniCurrentDonateAmount = parseFloat(feniDonateAmountValue.innerText);
    
    const newAmountAddFeni = feniCurrentDonateAmount + parseFloat(feniInputValue);
    feniDonateAmountValue.innerText = newAmountAddFeni;


    //
    const totalMyBalanceLess = getPreviousMyBalance('total-balance')
    const newTotalMyBalance = totalMyBalanceLess - parseFloat(feniInputValue);
    document.getElementById('total-balance').innerText = newTotalMyBalance;
})



//Quota Movement 
const quotaDonationButton = document.getElementById('quota-donate-button');
quotaDonationButton.addEventListener('click',function(){
    const quotaInputValue = getInputValueById('quota-donate-input');


    if(isNaN(quotaInputValue) || quotaInputValue < 0 || quotaInputValue === ''){
        alert('Invalid Donation Amount')
    }

    else{
    document.getElementById('my_modal_4').classList.remove('hidden');
    // document.getElementById('success-message').style.display = 'block';

    }


    //
    
    const quotaDonateAmountValue = document.getElementById('quota-donate-amount');
    const feniCurrentDonateAmount = parseFloat(quotaDonateAmountValue.innerText);
    
    const newAmountAddQuota = feniCurrentDonateAmount + parseFloat(quotaInputValue);
    quotaDonateAmountValue.innerText = newAmountAddQuota;

    //
    const totalMyBalanceLess = getPreviousMyBalance('total-balance')
    const newTotalMyBalance = totalMyBalanceLess - parseFloat(quotaInputValue);
    document.getElementById('total-balance').innerText = newTotalMyBalance;
    

})






// Blog
    document.getElementById('blog-button').addEventListener('click', function() {
    window.location.href = 'blog.html';
});

// Blog