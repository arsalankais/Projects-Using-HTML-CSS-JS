const body = document.querySelector("body")
body.addEventListener("click", (e) => {
    const div = document.createElement("div")
    div.classList.add("circle")
    div.textContent = "HI"
    const color = ["red", "blue", "orange", "green", "pink", "purple"];
    div.style.backgroundColor = color[Math.floor(Math.random() * color.length)]
    div.style.top = `${e.clientY - 25}px`
    div.style.left = `${e.clientX - 25}px`
    body.append(div)
    console.log(body)
    setTimeout(() => {
        div.remove()
    }, 5000)
})