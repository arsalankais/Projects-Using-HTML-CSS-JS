const timer = () => {
    const div = document.querySelector("div")
    let time = new Date()
    div.textContent = time.toLocaleTimeString()
}

setInterval(timer, 1000)