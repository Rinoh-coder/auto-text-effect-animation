const containerEl = document.querySelector(".container");

const name = ["Luciana", "Doxi", "Hyacinthe", "Maitso"];
let nameIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    containerEl.innerHTML = `
    <h1>I am ${name[nameIndex].slice(0, characterIndex)}</h1>
    `;
    if (characterIndex === name[nameIndex].length) {
        nameIndex++;
        characterIndex = 0;

    }
    if (nameIndex === name.length) {
        nameIndex = 0;
    }
        setTimeout(updateText, 400);
}


