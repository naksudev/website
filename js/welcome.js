const text = "WELCOME.";

const pElement = document.getElementById("welcome-text-appear");
let index = 0;

function write() {
  if (index < text.length) {
    pElement.textContent += text.charAt(index);
    index++;
    setTimeout(write, 100); // Délai entre chaque caractère (ajustez selon vos besoins)
  }
}

write();