let turn = "X";

const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const boardArray = new Array(9).fill("E");

function checkWinner() {
    for (let [a, b, c] of winner) {
        if (
            boardArray[a] !== "E" &&
            boardArray[a] === boardArray[b] &&
            boardArray[b] === boardArray[c]
        ) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return !boardArray.includes("E");
}

const board = document.querySelector(".board");
const winningMSG = document.querySelector(".winningmsgs");

board.addEventListener("click", (e) => {
    const element = e.target;

    if (!element.classList.contains("cell")) return;
    if (boardArray[element.id] !== "E") return;

    element.innerHTML = turn;
    element.classList.add(turn);
    boardArray[element.id] = turn;

    if (checkWinner()) {
        winningMSG.innerHTML = `🎉 Winner is ${turn}`;
        winningMSG.classList.add("show");
        board.style.pointerEvents = "none";
        return;
    }

    if (checkDraw()) {
        winningMSG.innerHTML = "🤝 Match Draw!";
        winningMSG.classList.add("show", "draw");
        board.style.pointerEvents = "none";
        return;
    }

    turn = turn === "X" ? "O" : "X";
});


const resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener("click", () => {
    for (let i = 0; i < boardArray.length; i++) {
        boardArray[i] = "E";
    }

    document.querySelectorAll(".cell").forEach(cell => {
        cell.innerHTML = "";
        cell.classList.remove("X", "O");
    });

    winningMSG.innerHTML = "";
    winningMSG.classList.remove("show", "draw");

    board.style.pointerEvents = "auto";
    turn = "X";
});
