
const cricketQuiz = [
    {
        question: "Who is known as the God of Cricket?",
        options: ["Virat Kohli", "Sachin Tendulkar", "MS Dhoni", "Ricky Ponting"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "How many players are there in a cricket team?",
        options: ["9", "10", "11", "12"],
        answer: "11"
    },
    {
        question: "Which country won the first Cricket World Cup in 1975?",
        options: ["Australia", "England", "West Indies", "India"],
        answer: "West Indies"
    },
    {
        question: "What is the length of a cricket pitch?",
        options: ["20 yards", "21 yards", "22 yards", "24 yards"],
        answer: "22 yards"
    },
    {
        question: "Who is called Captain Cool?",
        options: ["Rohit Sharma", "Virat Kohli", "MS Dhoni", "Kapil Dev"],
        answer: "MS Dhoni"
    },
    {
        question: "Which format of cricket has 20 overs per side?",
        options: ["Test", "ODI", "T20", "The Hundred"],
        answer: "T20"
    },
    {
        question: "Who has scored the highest individual score in ODIs?",
        options: ["Rohit Sharma", "Sachin Tendulkar", "Chris Gayle", "Martin Guptill"],
        answer: "Rohit Sharma"
    },
    {
        question: "Which country is known as the Proteas?",
        options: ["Australia", "South Africa", "England", "New Zealand"],
        answer: "South Africa"
    },
    {
        question: "How many runs are awarded for a no-ball?",
        options: ["0", "1", "2", "6"],
        answer: "1"
    },
    {
        question: "Which bowler has taken the most wickets in Test cricket?",
        options: ["Anil Kumble", "Muttiah Muralitharan", "Shane Warne", "James Anderson"],
        answer: "Muttiah Muralitharan"
    },
    {
        question: "Who won the ICC Cricket World Cup 2011?",
        options: ["Sri Lanka", "India", "Australia", "Pakistan"],
        answer: "India"
    },
    {
        question: "Which stadium is known as the Home of Cricket?",
        options: ["MCG", "Lords", "Eden Gardens", "Wankhede"],
        answer: "Lords"
    },
    {
        question: "How many balls are there in one over?",
        options: ["4", "5", "6", "8"],
        answer: "6"
    },
    {
        question: "Who was the first batsman to score a double century in ODIs?",
        options: ["Sachin Tendulkar", "Virender Sehwag", "Rohit Sharma", "Chris Gayle"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which Indian player is nicknamed Hitman?",
        options: ["Virat Kohli", "KL Rahul", "Rohit Sharma", "Shikhar Dhawan"],
        answer: "Rohit Sharma"
    },
    {
        question: "What color jersey does India wear in ODIs?",
        options: ["White", "Blue", "Green", "Yellow"],
        answer: "Blue"
    },
    {
        question: "Which team won the IPL 2023?",
        options: ["CSK", "GT", "MI", "RR"],
        answer: "CSK"
    },
    {
        question: "Who is the fastest bowler in cricket history?",
        options: ["Brett Lee", "Shoaib Akhtar", "Mitchell Starc", "Shaun Tait"],
        answer: "Shoaib Akhtar"
    },
    {
        question: "Which country hosts the Big Bash League?",
        options: ["India", "England", "Australia", "South Africa"],
        answer: "Australia"
    },
    {
        question: "What does LBW stand for?",
        options: ["Leg Before Wicket", "Long Ball Wide", "Leg Behind Wicket", "Low Bat Width"],
        answer: "Leg Before Wicket"
    }
];


const randomQuestions = () => {
    const data = new Set();
    while (data.size != 5) {
        const index = Math.floor(Math.random() * 20)
        data.add(cricketQuiz[index])
    }
    return [...data]
}


const form = document.querySelector("form")
const problem = randomQuestions()

const originalAnswer = {}
problem.forEach((obj, index) => {
    const div = document.createElement("div")
    div.className = "question"
    originalAnswer[`q${index + 1}`] = obj["answer"]
    const h2 = document.createElement("h2")
    h2.textContent = `${index + 1}.${obj["question"]}`

    div.appendChild(h2)
    obj["options"].forEach((data) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio"
        input.name = `q${index + 1}`
        input.value = data
        label.appendChild(input)
        label.appendChild(document.createTextNode(data))
        div.appendChild(label)
        div.appendChild(document.createElement("br"))
    })
    form.appendChild(div)
})



const button = document.createElement("button")
button.type = "submit"
button.textContent = "Submit"
form.appendChild(button)




const result = document.querySelector("#out")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const data = new FormData(form)
    let score = 0;
    for (let [key, value] of data.entries()) {
        if (value === originalAnswer[key]) {
            score++
        }
    }
    result.style.display = "block";
    result.innerHTML = `You Score is <span>${score}</span> Out of 5🎉`
})

