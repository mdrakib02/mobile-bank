

document.getElementById("add-money-button").addEventListener("click", function() {
    document.getElementById("cash-out-feature").classList.add("hidden");
    document.getElementById("add-money-feature").classList.remove("hidden");
    
    

})
document.getElementById("cash-button").addEventListener("click", function() {
    document.getElementById("cash-out-feature").classList.remove("hidden");

    document.getElementById("add-money-feature").classList.add("hidden");


})

