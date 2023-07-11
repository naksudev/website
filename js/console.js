const consoleOutput = document.getElementById("console-output");
const consoleInput = document.getElementById("console-input");

consoleInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleCommand(consoleInput.value);
        consoleInput.value = "";
        scrollToBottom();
    }
});

function handleCommand(command) {
    const output = document.createElement("div");
    output.textContent = `$ ${command}`;
    consoleOutput.appendChild(output);

    const result = document.createElement("div");
    result.textContent = "Command not found";
    consoleOutput.appendChild(result);

    scrollToBottom();
}

function scrollToBottom() {
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
}