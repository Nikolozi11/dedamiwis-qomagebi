const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // ღილაკზე დაჭერისას მენიუ გამოჩნდება ან დაიმალება
});




const crosswordData = [
    ["", "ს", "ა", "ქ", "ა", "რ", "თ", "ვ", "ე", "ლ", "ო"],
    ["", "", "", "", "", "", "", "", "", "", ""],
    ["", "ა", "მ", "ბ", "ა", "ვ", "ი", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", ""],
    ["", "მ", "თ", "ა", "ვ", "ა", "რ", "ი", "", "", ""],
    ["", "", "ა", "", "", "", "", "ა", "", "", ""],
    ["", "", "გ", "", "", "", "", "პ", "", "", ""],
    ["", "", "ვ", "", "", "", "", "ო", "", "", ""],
    ["", "", "ი", "", "", "", "", "ნ", "", "", ""],
    ["", "", "", "", "", "", "", "ი", "", "", ""],
    ["", "", "", "", "", "", "", "ა", "", "", ""],
];

const table = document.getElementById("crossword");
let inputs = [];
let isHorizontal = true; // მართავს მიმართულებას

// კროსვორდის გენერაცია
for (let i = 0; i < crosswordData.length; i++) {
    let row = table.insertRow();
    for (let j = 0; j < crosswordData[i].length; j++) {
        let cell = row.insertCell();
        if (crosswordData[i][j] !== "") {
            let input = document.createElement("input");
            input.dataset.answer = crosswordData[i][j];
            input.maxLength = 1;
            inputs.push({ element: input, row: i, col: j });
            cell.appendChild(input);
        } else {
            cell.classList.add("filled"); // ცარიელი უჯრები
        }
    }
}

// ავტომატური გადაადგილება (ჰორიზონტალური/ვერტიკალური)
inputs.forEach((item, index) => {
    item.element.addEventListener("input", (event) => {
        if (event.inputType !== "deleteContentBackward" && item.element.value !== "") {
            moveCursor(index, 1);
        }
    });

    item.element.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && item.element.value === "" && index > 0) {
            moveCursor(index, -1);
        }
    });
});

// კურსორის გადაადგილება მიმართულების მიხედვით
function moveCursor(currentIndex, step) {
    let nextIndex = -1;

    if (isHorizontal) {
        // ჰორიზონტალური მიმართულება
        nextIndex = inputs.findIndex(i => i.row === inputs[currentIndex].row && i.col === inputs[currentIndex].col + step);
    } else {
        // ვერტიკალური მიმართულება
        nextIndex = inputs.findIndex(i => i.row === inputs[currentIndex].row + step && i.col === inputs[currentIndex].col);
    }

    // თუ შემდეგი უჯრა არსებობს, კურსორი იქ გადაინაცვლებს
    if (nextIndex !== -1) {
        inputs[nextIndex].element.focus();
    } else {
        // სხვა ქმედება, როცა შემდეგი უჯრა არ არსებობს
        let firstInput = isHorizontal
            ? inputs.find(i => i.row === inputs[currentIndex].row && i.col === 0) // გადადის სტარტში
            : inputs.find(i => i.col === inputs[currentIndex].col && i.row === 0); // გადადის სტარტში
        if (firstInput) firstInput.element.focus();
    }
}

// მიმართულების შეცვლა (ჰორიზონტალური ↔ ვერტიკალური)
function toggleDirection() {
    isHorizontal = !isHorizontal;
    alert(isHorizontal ? "ჰორიზონტალური" : "ვერტიკალური");
}

// პასუხების შემოწმება
function checkAnswers() {
    inputs.forEach(item => {
        let userAnswer = item.element.value.trim().normalize("NFC").toUpperCase();
        let correctAnswer = item.element.dataset.answer.trim().normalize("NFC").toUpperCase();

        if (userAnswer === correctAnswer) {
            item.element.style.backgroundColor = "lightgreen";
        } else {
            item.element.style.backgroundColor = "red";
        }
    });
}