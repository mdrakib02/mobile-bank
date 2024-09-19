


document.getElementById('cash-out-button').addEventListener("click", function(event) {
    event.preventDefault();
    const currentBalance = document.getElementById("current-balance").innerText;
    const balances = parseFloat(currentBalance);

    
    const cashOut  = document.getElementById("cash-out-amount").value;
    const cashOutNumber = parseFloat(cashOut);
    
    const pinNumber = document.getElementById("cash-out-pin").value;

    if(pinNumber === "1234"){

        const totalBalance = balances - cashOutNumber;
        document.getElementById("current-balance").innerText = totalBalance;
        
    }
    else{
        alert("Please Try Again Letter")
    }

    document.getElementById("cash-out-pin").value = "";
    document.getElementById("cash-out-amount").value = "";

})