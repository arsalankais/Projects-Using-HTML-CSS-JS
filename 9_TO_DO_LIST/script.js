const form = document.querySelector("form");
const result = document.querySelector(".todo-list");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    const parent = document.createElement("div");
    parent.style.display = "flex";
    parent.style.alignItems = "center";
    parent.style.justifyContent = "space-between";
    parent.style.padding = "12px 16px";
    parent.style.marginBottom = "10px";
    parent.style.borderRadius = "10px";
    parent.style.backgroundColor = "#f5f5f5";
    parent.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";

    const task = document.createElement("span");
    task.textContent = text;
    task.style.fontSize = "22px";
    task.style.flex = "1";
    task.style.marginRight = "20px";
    task.style.wordBreak = "break-word";

    const btnWrapper = document.createElement("div");

    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.style.padding = "6px 12px";
    doneButton.style.marginRight = "10px";
    doneButton.style.border = "none";
    doneButton.style.borderRadius = "6px";
    doneButton.style.cursor = "pointer";
    doneButton.style.backgroundColor = "#4CAF50";
    doneButton.style.color = "#fff";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.padding = "6px 12px";
    deleteButton.style.border = "none";
    deleteButton.style.borderRadius = "6px";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.backgroundColor = "#f44336";
    deleteButton.style.color = "#fff";

    doneButton.addEventListener("click", () => {
        const completed = task.style.textDecoration === "line-through";
        task.style.textDecoration = completed ? "none" : "line-through";
        task.style.color = completed ? "#000" : "grey";
    });

    deleteButton.addEventListener("click", () => {
        parent.remove();
    });

    btnWrapper.append(doneButton, deleteButton);
    parent.append(task, btnWrapper);
    result.append(parent);
    form.reset();
});
