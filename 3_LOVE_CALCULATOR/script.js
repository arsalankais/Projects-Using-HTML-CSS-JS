const form = document.querySelector("form")
form.addEventListener("submit",(e) =>{
    e.preventDefault()
    const boy = document.querySelector("#boyname")
    const girl = document.querySelector("#girlname")
    const boyVal = boy.value.length
    const girlVal = girl.value.length
    const result = (Math.pow(boyVal + girlVal, 3)) % 101
    const h2 = document.querySelector("h2")
    h2.textContent = result
    form.reset
    
})