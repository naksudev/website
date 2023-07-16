const normalText = "WELCOME.";
let subliminalText = "";

fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    subliminalText = data.ip;
  })
  .catch(error => {
    subliminalText = "[[I'M ENDLESS.]]";
  });

const pElement = document.getElementById("welcome-text-appear");
let isNormal = true;

function toggleText() {
  if (isNormal) {
    pElement.textContent = subliminalText;
    pElement.style.color = "red";
    const randomDelayHIDE = Math.floor(Math.random() * (100 - 200 + 1)) + 200;
    setTimeout(toggleText, randomDelayHIDE)
  } else {
    pElement.textContent = normalText;
    pElement.style.color = "";
    const randomDelay = Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;
    setTimeout(toggleText, randomDelay)
  }

  isNormal = !isNormal;
}

function write() {
  const text = "WELCOME.";
  let index = 0;

  function updateText() {
    if (index < text.length) {
      pElement.textContent += text.charAt(index);
      index++;
      setTimeout(updateText, 100);
    } else {
      setTimeout(toggleText, 10000);
    }
  }

  updateText();
}

write();