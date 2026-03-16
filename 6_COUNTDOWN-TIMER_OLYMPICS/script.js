const countDownTimer = () => {
    const result = document.querySelector(".result")
    let curentTime = Date.now()
    const olympicTime = new Date(2028, 6, 14).getTime()
    let timer = olympicTime - curentTime;
    const day = Math.floor((timer) / (1000 * 60 * 60 * 24))
    timer %= 1000 * 60 * 60 * 24
    const hour = Math.floor((timer) / (1000 * 60 * 60))
    timer %= 1000 * 60 * 60
    const minute = Math.floor((timer) / (1000 * 60))
    timer %= 1000 * 60
    const seconds = Math.floor((timer) / (1000))
    timer %= 1000
    result.textContent = `Days: ${day} Hour:  ${hour} Minute:  ${minute} Seconds :  ${seconds}`
}


setInterval(countDownTimer, 1000)
