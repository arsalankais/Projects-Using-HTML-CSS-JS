const button = document.querySelector("button")
button.addEventListener("click", () => {
    const input1 = document.getElementById("first")
    const firstNumber = Number(input1.value)
    const input2 = document.getElementById("second")
    const secondNumber = Number(input2.value)
    
    if (isNaN(firstNumber) || isNaN(secondNumber))
        return;
    const result = firstNumber + secondNumber
    const re = document.getElementById("result")
    re.textContent = "Result:" + result;

})