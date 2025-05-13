const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // ღილაკზე დაჭერისას მენიუ გამოჩნდება ან დაიმალება
});



document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.read-more-btn').forEach(button => {
      button.addEventListener('click', function() {
          const fullArticle = this.nextElementSibling;  // მოძებნოს .full-article, რომელიც ამ ღილაკის შემდეგ მოდის
          
          if (fullArticle.classList.contains('show')) {
              fullArticle.classList.remove('show');  // იმალება
              this.textContent = 'დახურვა';  // ტექსტი იცვლება
          } else {
              fullArticle.classList.add('show');  // ჩანს
             
          }
      });
  });
});









document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function() {
      const fullArticle = this.nextElementSibling;  // full-article-ს მივუდგებით
      fullArticle.style.display = fullArticle.style.display === 'none' ? 'block' : 'none';
      this.textContent = fullArticle.style.display === 'none' ? 'იხილეთ მეტი' : 'დახურა';
    });
  });




  //---------------------------------------------------------//


  const crosswordData = [
    ["", "", "", "", "", "", "", "", "", "", "", "", "ლ", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "ი", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "თ", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "ო", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "ს", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "ფ", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "ე", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "რ", "", "კ"],
    ["", "", "", "", "", "", "", "", "", "", "ი", "ნ", "ო", "ზ", "ო"],
    ["", "", "", "", "", "", "", "", "", "", "", "ე", "", "", "მ"],
    ["", "", "", "", "", "", "", "", "ე", "", "", "შ", "", "", "პ"],
    ["", "", "", "", "", "", "", "", "კ", "", "", "ო", "", "", "ო"],
    ["", "", "", "", "", "", "", "", "ო", "", "", "მ", "", "", "ს"],
    ["", "", "", "", "", "", "", "", "ლ", "", "", "პ", "", "", "ტ"],
    ["", "", "", "ო", "რ", "ე", "ფ", "ს", "ო", "მ", "ტ", "ა", "", "", "ი"],
    ["", "", "", "", "", "რ", "", "", "ბ", "", "", "ლ", "", "", ""],
    ["",  "", "ა", "ი", "გ", "ო", "ლ", "ო", "ი", "ბ", "", "ა", "", "", "", ""],
    ["", "", "", "","", "ზ", "", "", "ა", "", "", "", "", "", ""],
    ["", "", "", "","", "ი", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "","", "ა", "", "", "", "", "", "", "", "", ""],
];

// შეკითხვების შენახვა
const questions = {
    "7,14": "რა ჰქვია ბიოლოგიურად სუფთა სასუქს?",
    "8,14": "შრე რომელიც დედამიწას იცავს?",
    "8,11": "ნიადაგის შემადგენლობის ის ნაწილი,რომელიც უზრუნველყოფს ნიადაგის გამდიდრებას და მის ნაყოფიერებას?",
    "14,11": "აირისებრი გარსი,რომელიც დედამიწას აკრავს გარს?",
    "10,8": "მეცნიერება,რომელიც შეისწავლის ცოცხალ ორგანიზმებს და მათ საცხოვრებლებს?",
    "14,5": "პროცესი რა დროსაც ზიანდება ქანები და ნიადაგი?",
    "16,9": "მეცნიერება,რომელიც შეისწავლის ცოცხალ არსებათა:აგებულებას, ფუნქციებს,გავრცელებას, წარმოშობას, განვითარებას, კავშირს ერთმანეთთან და არაცოცხალ ბუნებასთან?",
    "0,12": "დედამიწის ყველაზე გარე, მაგარი გარსი?",
};

// კროსვორდის გენერაცია
const table = document.getElementById("crossword");
let inputs = [];
let isHorizontal = true; // მართავს მიმართულებას
let questionCount = 1; // კითვის ნომრის счетი

for (let i = 0; i < crosswordData.length; i++) {
    let row = table.insertRow();
    for (let j = 0; j < crosswordData[i].length; j++) {
        let cell = row.insertCell();
        if (crosswordData[i][j] !== "") {
            let input = document.createElement("input");
            input.dataset.answer = crosswordData[i][j];
            input.maxLength = 1;
            inputs.push({ element: input, row: i, col: j });

            // მიმდინარე უჯრისთვის შეკითხვის ნომერი
            let key = `${i},${j}`;
            if (questions[key]) {
                // <span> ელემენტი, რომში ნომერი ჩაწერო
                let questionNumber = document.createElement("span");
                questionNumber.textContent = `Q${questionCount}`; // აჩვენებს ნომერს, მაგალითად Q1, Q2
                questionNumber.classList.add("question-number");
                cell.appendChild(questionNumber);

                // გაზრდის კითხვების ნომრის счетი
                questionCount++;
            }

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
        nextIndex = inputs.findIndex(i => i.row === inputs[currentIndex].row && i.col === inputs[currentIndex].col - step);
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