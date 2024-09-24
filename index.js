    function getInputValueById(id){
        return parseFloat(document.getElementById(id).value);
    }

    function getPreviousMyBalance(id){
        return parseFloat(document.getElementById(id).innerText) || 0;
    }


    // Home button 
    const homeButton = document.getElementById('home-button');
    if (homeButton) {
        homeButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    // Blog button 
    const blogButton = document.getElementById('blog-button');
    if (blogButton) {
        blogButton.addEventListener('click', function() {
            window.location.href = 'blog.html'; // Redirect to Blog
        });
    }


    //Donation and history Button
    const donationButton =document.getElementById('donation-btn');
    const historyButton = document.getElementById('history-btn');
    //donation
    donationButton.addEventListener('click',function(){
        donationButton.classList.add(
            'bg-[#B4F461]'
        )
        historyButton.classList.remove(
            'text-black'
        )
        historyButton.classList.remove('bg-[#B4F461]');
        document.getElementById('history-section').classList.add('hidden');
        document.getElementById('main-hidden').classList.remove('hidden');
    })

    //history
    historyButton.addEventListener('click',function(){
        historyButton.classList.add(
            'bg-[#B4F461]'
        )

        donationButton.classList.remove(
            'bg-[#B4F461]'
        )

        document.getElementById('history-section').classList.remove('hidden');
        document.getElementById('main-hidden').classList.add('hidden');


    })


    // 1

    //Noakhali donate 
    const noakhaliDonateButton =document.getElementById('noakhali-donate-button');
    noakhaliDonateButton.addEventListener('click',function(){
    const noakhaliInputValue = getInputValueById('noakhali-donate-input');   

    //alert
    if(isNaN(noakhaliInputValue) || noakhaliInputValue <= 0 || noakhaliInputValue === ''){
        alert('Invalid Donation Amount')
    }
    else{
        const modal = document.getElementById('my_modal_2')
        modal.showModal();
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




    // 2

    //Feni Donate
    const feniDonationButton = document.getElementById('feni-donate-button');
    feniDonationButton.addEventListener('click',function(){
    const feniInputValue = getInputValueById('feni-donate-input');

    //alert
    if(isNaN(feniInputValue) || feniInputValue <= 0 || feniInputValue === ''){
        alert('Invalid Donation Amount')
    }

    else{
        const modal = document.getElementById('my_modal_2')
        modal.showModal();

    }

    const feniDonateAmountValue = document.getElementById('feni-donate-amount');
    const feniCurrentDonateAmount = parseFloat(feniDonateAmountValue.innerText);

    const newAmountAddFeni = feniCurrentDonateAmount + parseFloat(feniInputValue);
    feniDonateAmountValue.innerText = newAmountAddFeni;


    //
    const totalMyBalanceLess = getPreviousMyBalance('total-balance')
    const newTotalMyBalance = totalMyBalanceLess - parseFloat(feniInputValue);
    document.getElementById('total-balance').innerText = newTotalMyBalance;



    })


    // 3
    //Quota Movement donate
    const quotaDonationButton = document.getElementById('quota-donate-button');
    quotaDonationButton.addEventListener('click',function(){
    const quotaInputValue = getInputValueById('quota-donate-input');


    if(isNaN(quotaInputValue) || quotaInputValue <= 0 || quotaInputValue === ''){
        alert('Invalid Donation Amount');
        return
    }

    else{
        const modal = document.getElementById('my_modal_2')
        modal.showModal();
        

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

    return

    })


//History Details

//     function addDonationNoakhali(id) {
//         const donationAmount = getInputValueById(id);
        
//         // const donationAmount = document.getElementById("noakhali-donate-input").value;
//         const donationList = document.getElementById("history-section");
//         if (donationAmount ) {
//             // Get current time
//             const currentTime = new Date().toLocaleString('en-GB', { timeZoneName: 'short' });
//             document.getElementById('history-section')
//             // Create a new div for the donation
//             const newDonation = document.createElement("div");
//             newDonation.className = "p-4 mt-2 border-2 rounded shadow-md";

//             // Add content (donation amount and time)
//             newDonation.innerHTML = `
//                 <p><strong>${donationAmount} Taka Donated for fsmine-2024 at,Noakhali,Banglasdesh</strong> </p>
//                 <p>Date: ${currentTime} (Bangladesh Standard Time)</p>
//             `;

//             // Append new div to donation list
//             donationList.appendChild(newDonation);
// don
//             // Clear the input field
//             document.getElementById("donationInput").value = "";
//         }
    
//     }

//     //feni history
//     function addDonationFeni(id) {
//         const donationAmount = getInputValueById(id);
        
//         // const donationAmount = document.getElementById("noakhali-donate-input").value;
//         const donationList = document.getElementById("history-section");
//         if (donationAmount ) {
//             // Get current time
//             const currentTime = new Date().toLocaleString('en-GB', { timeZoneName: 'short' });
//             document.getElementById('history-section')
//             // Create a new div for the donation
//             const newDonation = document.createElement("div");
//             newDonation.className = "p-4 mt-2 border-2 rounded shadow-md";

//             // Add content (donation amount and time)
//             newDonation.innerHTML = `
//                 <p><strong>${donationAmount} Taka Donated for Flood Relief in feni,Banglasdesh</strong> </p>
//                 <p>Date: ${currentTime} (Bangladesh Standard Time)</p>
//             `;

//             // Append new div to donation list
//             donationList.appendChild(newDonation);
// don
//             // Clear the input field
//             document.getElementById("donationInput").value = "";
//         }
    
//     }

//     //quota history
//     function addDonationQuota(id) {
//         const donationAmount = getInputValueById(id);
        
//         // const donationAmount = document.getElementById("noakhali-donate-input").value;
//         const donationList = document.getElementById("history-section");
//         if (donationAmount ) {
//             // Get current time
//             const currentTime = new Date().toLocaleString('en-GB', { timeZoneName: 'short' });
//             document.getElementById('history-section')
//             // Create a new div for the donation
//             const newDonation = document.createElement("div");
//             newDonation.className = "p-4 mt-2 border-2 rounded shadow-md";

//             // Add content (donation amount and time)
//             newDonation.innerHTML = `
//                 <p><strong>${donationAmount} Taka is Donate For Aid For injured in the Quota Movement Banglasdesh</strong> </p>
//                 <p>Date: ${currentTime} (Bangladesh Standard Time)</p>
//             `;

//             // Append new div to donation list
//             donationList.appendChild(newDonation);
// don
//             // Clear the input field
//             document.getElementById("donationInput").value = "";
//         }
    
//     }



//donation History
function addDonation(id, location, message) {
    const donationAmount = getInputValueById(id);
    const donationList = document.getElementById("history-section");

    if (donationAmount) {
        const currentTime = new Date().toLocaleString('en-GB', { timeZoneName: 'short' });
        
        const newDonation = document.createElement("div");
        newDonation.className = "p-4 mt-2 border-2 rounded shadow-md";

        newDonation.innerHTML = `
            <p><strong>${donationAmount} Taka Donated for ${message} at ${location}, Bangladesh</strong></p>
            <p>Date: ${currentTime} (Bangladesh Standard Time)</p>
        `;

        donationList.appendChild(newDonation);
    
        document.getElementById("donationInput").value = "";
    }
}







