const consoleOutput = document.getElementById("console-output");
const consoleInput = document.getElementById("console-input");
var diskData = [{
        id: 0,
        name: "sys0",
        usage: "8GB/128GB",
        status: "Online"
    },
    {
        id: 1,
        name: "backup159",
        usage: "Unknown",
        status: "Offline"
    }
];

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
    output.innerHTML = `<span class="command">> ${command}</span>`;
    consoleOutput.appendChild(output);

    switch (command) {
        case "help":
            output.innerHTML += "<br>. . .";
            break;
        case "disk":
            output.innerHTML += "<br>Please, provide an argument <br> - disk [enable|disable] [id] <br> - disk list <br> - disk access [id]";
            break;
        case "disk list":
            output.innerHTML += "<br>";
            output.innerHTML += "<span class='disk-id'>ID</span>" + "\t";
            output.innerHTML += "<span class='disk-name'>NAME</span>" + "\t";
            output.innerHTML += "<span class='disk-usage'>USAGE</span>" + "\t";
            output.innerHTML += "<span class='disk-status'>STATUS</span>";

            for (var i = 0; i < diskData.length; i++) {
                output.innerHTML += "<br>";
                output.innerHTML += "<span class='disk-id'>" + diskData[i].id + "</span>" + "\t";
                output.innerHTML += "<span class='disk-name'>" + diskData[i].name + "</span>" + "\t";
                output.innerHTML += "<span class='disk-usage'>" + diskData[i].usage + "</span>" + "\t";
                output.innerHTML += "<span class='disk-status'>" + diskData[i].status + "</span>";
            };
            break;
        case "disk disable 0":
            output.innerHTML += "<br>";
            output.innerHTML += "This disk is in use";
            break;
        case "disk enable 0":
            output.innerHTML += "<br>";
            output.innerHTML += "This disk is already running";
            break;
        case "disk disable 1":
            diskData[1].status = "Offline";
            diskData[1].usage = "Unknown";
            break;
        case "disk enable 1":
            if (diskData[1].status === "Online") {
                output.innerHTML += "<br>";
                output.innerHTML += "This disk is already running"
            } else {
                diskData[1].status = "Online";
                diskData[1].usage = "128KO/128KO";
                output.innerHTML += "<br>";
                output.innerHTML += "<span class='enabled'>Disk backup159 enabled</span>";
            };
            break;
        case "disk access 0":
            output.innerHTML += "<br>";
            output.innerHTML += "You are already in this disk";
            break;
        case "disk access 1":
            output.innerHTML += "<br>";
            if (diskData[1].status === "Online") {
                output.innerHTML += "Running access protocol to backup159..";
                setTimeout(() => {
                    output.innerHTML += "<br>";
                    output.innerHTML += "<span class='success-protocol'>ENTERING backup159...</span>";
                    output.innerHTML += "<br>";
                    output.innerHTML += "<br>";
                    output.innerHTML += "<div class='enfoldlight-mission'>== ENFOLD LIGHT MISSION ==</div>";
                    output.innerHTML += "Our world is doomed by impure light. Three astral beings have control of our world and they started to spread their light to gain even more power. Some have tried to go against them, failed, died.. Others are following them to survive or just by pure madness..";
                    output.innerHTML += "<br>";
                    output.innerHTML += "People are praying gods to get mercy, but nothing. But I know something that is superior to \"gods\", I even know his name : [/~ɛ/-\-|-()/~. I'll call him \"The Entity\" from now.";
                    output.innerHTML += "<br>";
                    output.innerHTML += "I think he's aware of my plans. If it's the case, then I might demise this mission to someone else. Someone that is not from my world. This is why I wrote this.";
                    output.innerHTML += "<br>";
                    output.innerHTML += "You. If you can see this message. I'm asking you to read carefully, with discretion.";
                    output.innerHTML += "<br>";
                    output.innerHTML += "I created something powerful enough to overthrown the astral beings that reigns our world. My creation is something I can't control, It requires an advanced technology that I managed to modulate. I haven't named my creation yet, I'll let you think about it. The Entity doesn't know about my creation yet. He'll only know about it once you'll use it.";
                    output.innerHTML += "<br>";
                    output.innerHTML += "If you accept this mission you'll need to find a numeric key that will allow you to run the <span class='enfoldlight'>enfoldlight</span> program. If you see me, in this program, don't tell me about this mission, my creation, how I managed to sent you this, or anything else.";
                }, 2000);
            } else {
                output.innerHTML += "Failed to run access protocol.";
            };
            break;
        case "enfoldlight":
            if (diskData[1].status === "Online") {
                output.innerHTML += "<br>";
                prompt("Enter the key to run the program");
                output.innerHTML += "Failed to run the program, the key is invalid.";
            } else {
                output.innerHTML += "<br>";
                output.innerHTML += "<br>Command not found";
            }
            break;
        default:
            output.innerHTML += "<br>Command not found";
            break;
    }

    scrollToBottom();
}

function scrollToBottom() {
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
}