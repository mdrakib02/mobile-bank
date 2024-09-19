

document.querySelector("#login-button-one").addEventListener("click", function (event) {

    event.preventDefault();
    const inputNum = document.querySelector("#number").value;
    const numbers = Number(inputNum);
    
    const inputPin = document.querySelector("#your-pin").value;
    
    if(typeof numbers == 'number' && inputPin === '1234'){
        window.location.href = "bank-form.html";
    }

    else{
        alert("Your Password Is Wrong");
    }
    document.querySelector("#number").value = "";
    document.querySelector("#your-pin").value = "";
})