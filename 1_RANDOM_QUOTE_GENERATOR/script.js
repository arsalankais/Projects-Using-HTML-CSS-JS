const quotes = [
    "Honesty is the best policy.",
    "Believe in yourself and all that you are.",
    "Dream big, work hard, stay focused.",
    "Success begins with self-discipline.",
    "Small steps every day lead to big results.",
    "Your attitude determines your direction.",
    "Do what is right, not what is easy.",
    "Hard work beats talent when talent doesn’t work.",
    "Stay patient and trust the process.",
    "Mistakes are proof that you are trying.",
    "Push yourself, because no one else will.",
    "Be the reason someone smiles today.",
    "Focus on progress, not perfection.",
    "Learn from yesterday, live for today.",
    "Consistency creates confidence.",
    "Kindness costs nothing but means everything.",
    "Don’t wait for opportunity, create it.",
    "Turn pain into power.",
    "Your future depends on what you do today.",
    "Simple living, high thinking."
];


const button = document.querySelector("button")
const h1 = document.querySelector("h1")
button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    h1.textContent = quotes[randomIndex]
})