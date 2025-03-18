const consoleOutput = document.getElementById("output-console");
const consoleInput = document.getElementById("user-input");
const consolePrompt = document.getElementById("prompt");
var loggedIn = false;

function scrollToBottom() {
	document.documentElement.scrollTop = document.documentElement.scrollHeight;
}

function handleCommand(command) {
	const output = document.createElement("div");

	if (loggedIn === true) {
		output.innerHTML = `<p class="naksu-prompt">$ ${command}</p>`;
		consoleOutput.appendChild(output);

		switch(command) {
			case "help":
				output.innerHTML += `<p style="color: yellow;">EASTER EGG STILL IN W.I.P.</p>`;
				break;
			default:
				output.innerHTML += `<p>Command not found.</p>`;
				break;
		}
	} else {
		output.innerHTML = `<p>$ ${command}</p>`;
		consoleOutput.appendChild(output);

		switch(command) {
			case "login":
				loggedIn = true;
				output.innerHTML += `<p>Welcome back, <span style="color: red;">NAKSU</span>.</p>`;
				consolePrompt.classList.add("naksu-prompt");
				consoleInput.classList.add("naksu-prompt");
				break;
			case "help":
				output.innerHTML += `<p>Use the login command to login with your account.</p>`;
				break;
			default:
				output.innerHTML += `<p>Command not found.</p>`;
				break;
		}
	}

	scrollToBottom();
}

export { handleCommand, consoleInput };
