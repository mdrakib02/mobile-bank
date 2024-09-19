





document.querySelector("#send-button").addEventListener("click", function(event) {
    event.preventDefault();
    const currentBalance = document.querySelector("#current-balance").textContent;
    const yourPin = document.querySelector("#your-pin").value;
    const yourAmount = document.querySelector("#your-amount").value;
    const amount = parseFloat(yourAmount);

    if(yourPin === "1234"){

    const balances = parseFloat(currentBalance);  
    const totalBalance = balances + amount;
    document.getElementById("current-balance").innerText = totalBalance;   
 }
    else{
        alert("Wrong Password")
    }

    document.querySelector("#your-pin").value = "";
    document.querySelector("#your-amount").value = "";
    
})