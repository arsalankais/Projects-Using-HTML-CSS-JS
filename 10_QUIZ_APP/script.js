const form = document.querySelector("form")
const originalAmswer = {
    q1: "11",
    q2: "Australia",
    q3: "Leg Before Wicket"
}
const result = document.querySelector("#out")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const data = new FormData(form)
    let score = 0;
    for (let [key, value] of data.entries()) {
        if (value === originalAmswer[key]) {
            score++
        }
    }
    result.style.display = "block";
    result.innerHTML = `You Score is <span>${score}</span> Out of 3 🎉`
})
