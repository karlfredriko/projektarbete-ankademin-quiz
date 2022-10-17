const questions = [{
    id: 0,
    q: "Vilken druva är troligtvis ett vin från Etna gjort av?",
    a: [{ text: "Pinot Noir", points: 1 },
    { text: "Grenache", points: 1 },
    { text: "Nerello Mascalese", points: 10 },
    { text: "Malbeck", points: 1 }
    ]
}, {
    id: 1,
    q: "Vilka av dessa druvor är gröna?",
    a: [{ text: "Chardonnay", points: 3 },
    { text: "Cabernet Sauvignon", points: 1 },
    { text: "Vinho Verde", points: 3 },
    { text: "Riesling", points: 4 }
    ]
}, {
    id: 2,
    q: "Det går att göra vitt vin på blå druvor?",
    a: [{ text: "Sant", points: 10 },
    { text: "Falskt", points: 1 },
    ]
}, {
    id: 3,
    q: "Den röda färgen i vinet kommer från skalen?",
    a: [{ text: "Sant", points: 10 },
    { text: "Falskt", points: 1 },
    ]
}, {
    id: 4,
    q: "'Blaufränkisch' är en druva som är vanligast var?",
    a: [{ text: "Ungern", points: 10 },
    { text: "Österike", points: 1 },
    { text: "Slovakien", points: 1 },
    { text: "Kroatien", points: 1 }
    ]
}, {
    id: 5,
    q: "Vilken blandning av druvor är vanlig i Rhône?",
    a: [{ text: "SMG Blend", points: 1 },
    { text: "GGS Blend", points: 1 },
    { text: "MGS Blend", points: 1 },
    { text: "GSM Blend", points: 10 }
    ]
}, {
    id: 6,
    q: "Vart kommer en Cava ifrån?",
    a: [{ text: "Spanien", points: 10 },
    { text: "Katalonien", points: 1 },
    { text: "Ungern", points: 1 },
    { text: "Portugal", points: 1 }
    ]
}, {
    id: 7,
    q: "Vilka av dessa viner kommer ifrån Italien?",
    a: [{ text: "Nebbiolo", points: 4 },
    { text: "Pinot Grigio", points: 3 },
    { text: "Lambrusco", points: 3 },
    { text: "Beujolais", points: 1 }
    ]
}, {
    id: 8,
    q: "Vilken smak hittar du i ett klassisk Beujolais?",
    a: [{ text: "Jordgubb", points: 10 },
    { text: "Peppar", points: 1 },
    { text: "Plommon", points: 1 },
    { text: "Kalk", points: 1 }
    ]
}, {
    id: 9,
    q: "Vilken av följande druvor får inte finnas i en Champagne?",
    a: [{ text: "Pinot Noir", points: 1 },
    { text: "Savignion Blanc", points: 10 },
    { text: "Chardonnay", points: 1 },
    { text: "Pinot Meunier", points: 1 }
    ]
}
];

console.log("JS is present.");
console.log(questions[0].a[0].text)
let darkmodeBtn = document.querySelector("#dark-mode-btn");
let startBtn = document.querySelector("#start-btn");
let h1 = document.querySelector("h1");

h1.addEventListener("click", () => h1.innerText = "Ankadevin Quiz Applikation")

darkmodeBtn.addEventListener("click", () => {
    let div = document.querySelector("div");
    div.classList.toggle("div-mode");
    document.body.classList.toggle("dark-mode");
});
let displayQuiz = () => {
    console.log("running displayQuiz func");
    let div = document.querySelector("div");
    div.innerHTML = "";
    questions.forEach(i => {
        let p = document.createElement("p");
        p.innerText = i.q;
        div.appendChild(p);
        for (let tot = 0; tot < i.a.length; tot++) {
            let radio = document.createElement("input");
            let label = document.createElement("label");
            radio.type = "radio";
            radio.name = "answer";
            radio.id = `answer${tot}`;
            radio.value = i.a[tot].points;
            label.htmlFor = `answer${tot}`;
            let labelText = document.createTextNode(i.a[tot].text);
            label.appendChild(labelText);
            div.append(radio);
            div.append(label);
            }
    });
};

startBtn.addEventListener("click", () => {
    console.log("Pressing btn");
    displayQuiz();
});



