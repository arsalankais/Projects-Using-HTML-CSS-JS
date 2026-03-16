const buttons = document.querySelectorAll(".buttons")
parent.addEventListener("click", (e) => {
    // console.log(e.target)
    const child = e.target;
    document.body.style.backgroundColor = child.id
})