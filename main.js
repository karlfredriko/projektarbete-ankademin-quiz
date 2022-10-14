const questions = [{
    id: 1,
    q: "Vilken druva är troligtvis ett vin från Etna gjort av?",
    a: [{ text: "Pinot Noir", rightAnswer: 0 },
    { text: "Grenache", rightAnswer: 0 },
    { text: "Nerello Mascalese", rightAnswer: 10 },
    { text: "Malbeck", rightAnswer: 0 }
    ]
}, {
    id: 2,
    q: "Vilka av dessa druvor är gröna?",
    a: [{ text: "Chardonnay", rightAnswer: 3 },
    { text: "Cabernet Sauvignon", rightAnswer: 0 },
    { text: "Cabernet Franc", rightAnswer: 3 },
    { text: "Merlot", rightAnswer: 4 }
    ]
}, {
    id: 3,
    q: "Det går att göra vitt vin på blå druvor?",
    a: [{ text: "Sant", rightAnswer: 0 },
    { text: "Falskt", rightAnswer: 10 },
    ]
}, {
    id: 4,
    q: "Den röda färgen i vinet kommer från skalen?",
    a: [{ text: "Sant", rightAnswer: 10 },
    { text: "Falskt", rightAnswer: 0 },
    ]
}, {
    id: 5,
    q: "'Blaufränkisch' är en druva som är vanligast var?",
    a: [{ text: "Ungern", rightAnswer: 10 },
    { text: "Österike", rightAnswer: 0 },
    { text: "Slovakien", rightAnswer: 0 },
    { text: "Kroatien", rightAnswer: 0 }
    ]
}, {
    id: 6,
    q: "Vilken blandning av druvor är vanlig i Rhône?",
    a: [{ text: "SMG Blend", rightAnswer: 0 },
    { text: "GGS Blend", rightAnswer: 0 },
    { text: "MGS Blend", rightAnswer: 0 },
    { text: "GSM Blend", rightAnswer: 10 }
    ]
}, {
    id: 7,
    q: "Vart kommer en Cava ifrån?",
    a: [{ text: "Spanien", rightAnswer: 10 },
    { text: "Katalonien", rightAnswer: 0 },
    { text: "Ungern", rightAnswer: 0 },
    { text: "Portugal", rightAnswer: 0 }
    ]
}, {
    id: 8,
    q: "Vilka av dessa viner kommer ifrån Italien?",
    a: [{ text: "Nebbiolo", rightAnswer: 4 },
    { text: "Pinot Grigio", rightAnswer: 3 },
    { text: "Lambrusco", rightAnswer: 3 },
    { text: "Beujolais", rightAnswer: 0 }
    ]
}, {
    id: 9,
    q: "Vilka smaker hittar du i ett klassisk Beujolais?",
    a: [{ text: "Jordgubb", rightAnswer: 10 },
    { text: "Peppar", rightAnswer: 0 },
    { text: "Plommon", rightAnswer: 0 },
    { text: "Kalk", rightAnswer: 0 }
    ]
}, {
    id: 10,
    q: "Vilket djur kan man inte ta med till skolan?",
    a: [{ text: "Orm", rightAnswer: 10 },
    { text: "Katt", rightAnswer: 0 },
    { text: "Hund", rightAnswer: 0 },
    { text: "Lunchlåda", rightAnswer: 0 }
    ]
}
];

console.log("JS is present.");
let darkmodeBtn = document.querySelector("#dark-mode-btn");
let startBtn = document.querySelector("#start-btn");

darkmodeBtn.addEventListener("click", () => {
    let div = document.querySelector("div");
    div.classList.toggle("div-mode");
    document.body.classList.toggle("dark-mode");
});
let displayQuiz = () => {
    console.log("Hi again")
    let div = document.querySelector("div");
    //div.innerHTML = ""
    let ul = document.createElement("ul");
    div.appendChild(ul);
    questions.forEach((i) => {
        if (i.question) {
            console.log(i);
            let h2 = document.createElement("h2");
            h2.innerText = i.value;
            div.appendChild(h2);
        } else {
            i.forEach((i) => {
                console.log(i);
                let ul = document.querySelector("ul");
                let li = document.createElement("li");
                li.innerText = i.value;
                ul.appendChild(li);
            })
        }
    })
    
}

startBtn.addEventListener("click", () => {
    console.log("HI");
    displayQuiz();
});



