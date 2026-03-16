const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const first = document.querySelector("#first")
    const second = document.querySelector("#second")
    const age = document.querySelector("#third")
    const result = document.querySelector("#result")
    result.innerHTML = `✅ Registration Successful <br>Welcome <span>${first.value} ${second.value}</span>, Age <span>${age.value}</span>`;
    result.className = "show success";
})