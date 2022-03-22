function buttonClick() {
    var input = document.getElementById("number");
    var result = document.getElementById("result");
    var inputNumber = parseInt(input.value);
    var isEvenresult = isEven(inputNumber);
    console.log("20.satır is even: " + isEven)
    if (isEvenresult) {
        result.innerHTML = "<strong> This is a even number! </strong>";
    }
    else {
        result.innerHTML = "<strong> This is a odd number. </strong>";
    }
}

function isEven(number) {

    var result = false;
    if (number % 2 == 0) {
        result = true;
    }
    return result;
}
