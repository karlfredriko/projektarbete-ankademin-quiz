const wineQuestions = [{
    no: 0,
    q: "Vilken druva är troligtvis ett vin från Etna gjort av?",
    a: [{ text: "Pinot Noir", points: 1 },
    { text: "Grenache", points: 1 },
    { text: "Nerello Mascalese", points: 10 },
    { text: "Malbeck", points: 1 }
    ],
    multi: false
}, {
    no: 1,
    q: "Vilka av dessa druvor är gröna? Markera alla rätta svar.",
    a: [{ text: "Chardonnay", points: 3 },
    { text: "Cabernet Sauvignon", points: 1 },
    { text: "Vinho Verde", points: 3 },
    { text: "Riesling", points: 4 }
    ],
    multi: true
}, {
    no: 2,
    q: "Det går att göra vitt vin på blå druvor?",
    a: [{ text: "Sant", points: 10 },
    { text: "Falskt", points: 1 },
    ],
    multi: false
}, {
    no: 3,
    q: "Den röda färgen i vinet kommer från skalen?",
    a: [{ text: "Sant", points: 10 },
    { text: "Falskt", points: 1 },
    ],
    multi: false
}, {
    no: 4,
    q: "'Blaufränkisch' druvan är vanligast i vilket land??",
    a: [{ text: "Österike", points: 1 },
        { text: "Ungern", points: 10 },
    { text: "Slovakien", points: 1 },
    { text: "Kroatien", points: 1 }
    ],
    multi: false
}, {
    no: 5,
    q: "Vilken blandning av druvor är vanlig i Rhône?",
    a: [{ text: "SMG Blend", points: 1 },
    { text: "GGS Blend", points: 1 },
    { text: "MGS Blend", points: 1 },
    { text: "GSM Blend", points: 10 }
    ],
    multi: false
}, {
    no: 6,
    q: "Vilket land kommer en Cava ifrån?",
    a: [{ text: "Spanien", points: 10 },
    { text: "Katalonien", points: 1 },
    { text: "Ungern", points: 1 },
    { text: "Portugal", points: 1 }
    ],
    multi: false
}, {
    no: 7,
    q: "Vilka av dessa viner kommer ifrån Italien?",
    a: [{ text: "Nebbiolo", points: 4 },
    { text: "Pinot Grigio", points: 3 },
    { text: "Lambrusco", points: 3 },
    { text: "Beujolais", points: 1 }
    ],
    multi: true
}, {
    no: 8,
    q: "Vilken smak hittar du i ett klassisk Beujolais?",
    a: [{ text: "Jordgubb", points: 10 },
    { text: "Peppar", points: 1 },
    { text: "Plommon", points: 1 },
    { text: "Kalk", points: 1 }
    ],
    multi: false
}, {
    no: 9,
    q: "Vilken av följande druvor får inte finnas i en Champagne?",
    a: [{ text: "Pinot Noir", points: 1 },
    { text: "Savignion Blanc", points: 10 },
    { text: "Chardonnay", points: 1 },
    { text: "Pinot Meunier", points: 1 }
    ],
    multi: false
}
];
const userAnswers = [
    { answer: 0 },
    { answer: 0 },
    { answer: 0 },
    { answer: 0 },
    { answer: 0 },
    { answer: 0 },
    { answer: 0 },
    { answer: 0 },
    { answer: 0 },
    { answer: 0 }
];
const testArray = [
    { answer: 10 },
    { answer: 1 },
    { answer: 10 },
    { answer: 10 },
    { answer: 1 },
    { answer: 10 },
    { answer: 10 },
    { answer: 10 },
    { answer: 10 },
    { answer: 9 }
];

console.log("JS is present.");
let darkmodeBtn = document.querySelector("#dark-mode-btn");
let startBtn = document.querySelector("#start-btn");
let div = document.querySelector("div");
let h1 = document.querySelector("h1");

//easter egg
h1.addEventListener("click", () => h1.innerText = "Ankadevin Quiz Applikation");
//darkmode function
darkmodeBtn.addEventListener("click", () => {
    let borderDiv = document.querySelector("#border");
    borderDiv.classList.toggle("div-mode");
    document.body.classList.toggle("dark-mode");
});
//displaying quiz
// skapar en funktion med två parametrar.
let displayQuiz = (questions,answers) => {
    console.log("running displayQuiz()");
    //tömmer diven, ändrar knapp text, sätter användarens svar till 0, 
    //för att kunna köra quizet flera ggr
    div.innerHTML = "";
    startBtn.innerText = "Starta om";
    answers.forEach(i => {
        i.answer = 0;
    })
    questions.forEach(i => {
        //loopar igenom frågorna. och skapar en ny div som får ett specifikt id.
        let newDiv = document.createElement("div");
        newDiv.id = i.no;
        // ger den en klass och döljer ramen.
        newDiv.classList.add("question-frame");
        let p = document.createElement("p");
        //skriver ut själva frågan och appendar i en ny div.
        p.innerText = `${i.no + 1}. ${i.q}`;
        newDiv.appendChild(p);
        for (let num = 0; num < i.a.length; num++) {
            // sen iom att det finns flera frågor i en array med objekt inuti arrayen, loopar jag igen
            let input = document.createElement("input");
            // checking if question have several correct answers
            if (!i.multi) {
                input.type = "radio";
            } else {
                input.type = "checkbox";
            }
            // och skapar alla inputsen med lables, sätter values och svarsalternativ,
            // och appendar, tills att alla svarsalternativ är klara.
            let label = document.createElement("label");
            input.name = "answer";
            input.id = `answer${num}`;
            input.value = i.a[num].points;
            label.htmlFor = `answer${num}`;
            let labelText = document.createTextNode(i.a[num].text);
            label.appendChild(labelText);
            newDiv.append(input);
            newDiv.append(label);
        };
        // nu skapar vi knappen för att spara svaret, och den kommer ligga i den nya diven.
        let submitBtn = document.createElement("button");
        let br = document.createElement("br");
        submitBtn.innerText = "Spara svar";
        newDiv.append(br);
        newDiv.append(submitBtn);
        div.append(newDiv);
        // sen har jag skapat en funktion som tittar på sin parent, som då är den specifika diven
        // och loopar igenom sin parents, children.
        submitBtn.addEventListener("click", () => {
            saveAnswers(userAnswers);
        });
    });
    let br = document.createElement("br");
    let showResultBtn = document.createElement("button");
    showResultBtn.innerText = "Visa resultat!";
    div.append(br);
    div.append(showResultBtn);
    showResultBtn.addEventListener("click", () => {
        showResult(questions, userAnswers);
    });
};
// saving answers in an array
let saveAnswers = (arr) => {
    let parent = event.target.parentNode;
    let nodeList = parent.childNodes;
    console.log("running saveAnswers()");
    // refers to the id of the div to know witch iteration of questions/answers to check and if that question remains unanswered.
    if (arr[parent.id].answer === 0) {
        for (let i = 0; i < nodeList.length; i++) {
            if (nodeList[i].checked && nodeList[i].type === "radio") {
                arr[parent.id].answer = +nodeList[i].value;
                event.target.remove();
            } else if (nodeList[i].checked && nodeList[i].type === "checkbox") {
                arr[parent.id].answer += +nodeList[i].value;
                event.target.remove();
            } else if (i === nodeList.length - 1 && arr[parent.id].answer === 0) {
                //if question is unanswered and the last iteration give friendly reminder.
                alert("Du måste svara;)");
            }
        };
    };
};
// displaying score and coloring text
// function takes two arrays as arguments.
let showResult = (q, a) => {
    div.innerHTML = "";
    let totalScore = 0;
    a.forEach((i) => {
        // adds correctly answered questions
        if (i.answer === 10) {
            totalScore += i.answer;
        }
    });
    console.log(totalScore);
    let p = document.createElement("p");
    let h2 = document.createElement("h2")
    p.innerText = `Du fick: ${totalScore/10}/10 poäng!`;
    div.append(p);
    div.append(h2);
    //checks total score and tells user points and grade.
    if (totalScore < 50) {
        h2.innerText = "Underkänt:("
        h2.style.color = "darkred";
    } else if (totalScore < 75) {
        h2.innerText = "Godkänt"
        h2.style.color = "darkorange";
    } else {
        h2.innerText = "Mycket väl Godkänt!"
        h2.style.color = "darkgreen";
    }
    q.forEach((i) => {
        // tells the user witch questions were correct/incorrect.
        let question = document.createElement("p");
        let answer = document.createElement("p");
        let correctAnswer = document.createElement("p");
        question.innerText = `${i.no + 1}. ${i.q}`;
        div.append(question);
        if (a[i.no].answer === 10) {
            answer.innerText = `Rätt`;
            answer.style.fontWeight = "bold"
            div.append(answer)
        } else if (a[i.no].answer !== 10) {
            // more detailed answer if incorrect
            answer.innerHTML = `<strong>Fel</strong><br>Rätt svar är:`;
            div.append(answer)
            i.a.forEach((i) => {
                if (i.points === 10) {
                    correctAnswer.innerText = `${i.text}`;
                } else if (i.points === 3 || i.points === 4) {
                    correctAnswer.textContent += `${i.text}, `;
                }
                div.append(correctAnswer);
            })
        }
    });
};
//adding function to startBtn
startBtn.addEventListener("click", () =>
    displayQuiz(wineQuestions,userAnswers));
    //showResult(wineQuestions, testArray));


