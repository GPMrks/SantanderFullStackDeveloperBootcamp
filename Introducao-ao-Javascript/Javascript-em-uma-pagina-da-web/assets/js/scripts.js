var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

const buttonAdd = document.getElementById("add");
buttonAdd.addEventListener("click", increment);

const buttonRemove = document.getElementById("remove");
buttonRemove.addEventListener("click", decrement);

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    checkValue();
}

function decrement() {
    
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    checkValue();
    
}

function checkValue(){
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "red";
    } else {
        currentNumberWrapper.style.color = "black";
    }

    if (currentNumber === 10) {
        buttonAdd.disabled = true;
    } else if (currentNumber === -10) {
        buttonRemove.disabled = true;
    } else {
        buttonAdd.disabled = false;
        buttonRemove.disabled = false;
    }

}