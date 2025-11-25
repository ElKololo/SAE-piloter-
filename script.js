// Tableau des questions
const questions = [
{
image: "mbappe.jpg",
question: "Quel joueur se trouve sur cette image ?",
options: ["Mbappé", "Messi", "Ronaldo"],
correctAnswer: "Mbappé"
},
{
image: "messi.jpg",
question: "Dans quel club Lionel Messi a-t-il passé la majorité de sa carrière ?",
options: ["FC Barcelone", "PSG", "Inter Miami"],
correctAnswer: "FC Barcelone"
},
{
image: "ronaldo.jpg",
question: "Quel est le vrai prénom complet de Cristiano Ronaldo ?",
options: ["Cristiano dos Santos Aveiro", "Cristiano Da Silva", "Cristiano Fernandes"],
correctAnswer: "Cristiano dos Santos Aveiro"
},
{
image: "neymar.jpg",
question: "Quel est le poste principal de Neymar ?",
options: ["Défenseur", "Attaquant", "Gardien"],
correctAnswer: "Attaquant"
},
{
image: "griezmann.jpg",
question: "Quel numéro porte généralement Griezmann en équipe de France ?",
options: ["7", "9", "11"],
correctAnswer: "7"
},
{
image: "benzema.jpg",
question: "Quel trophée Karim Benzema a remporté en 2022 ?",
options: ["Ballon d'Or", "The Best Award", "Golden Boy"],
correctAnswer: "Ballon d'Or"
},
{
image: "zidane.jpg",
question: "En quelle année Zidane a-t-il inscrit son célèbre doublé en finale de C1 avec le Real Madrid ?",
options: ["2000", "2002", "2004"],
correctAnswer: "2002"
}
];

// Variables globales
let score = 0;
let currentQuestionIndex = 0;

function showQuestion() {
const q = questions[currentQuestionIndex];

const questionDiv = document.getElementById("question");
const feedbackDiv = document.getElementById("feedback");

// Effacer le feedback précédent
feedbackDiv.innerHTML = "";

// 🔥 Ajout de l'affichage "Question X / Y"
questionDiv.innerHTML = `
<p>Question ${currentQuestionIndex + 1} / ${questions.length}</p>
<img src="${q.image}" alt="image de la question" width="200">
<p>${q.question}</p>
`;

showOptions(q);
}

function showOptions(q) {
const optionsDiv = document.getElementById("options");
optionsDiv.innerHTML = "";

q.options.forEach(option => {
const btn = document.createElement("button");
btn.textContent = option;
btn.classList.add("option-btn");

btn.addEventListener("click", () => {
checkAnswer(option);
});

optionsDiv.appendChild(btn);
});
}

function checkAnswer(selected) {
const q = questions[currentQuestionIndex];
const feedbackDiv = document.getElementById("feedback");

// Désactiver les boutons après la réponse
const allButtons = document.querySelectorAll(".option-btn");
allButtons.forEach(btn => btn.disabled = true);

if (selected === q.correctAnswer) {
score++;
feedbackDiv.textContent = `Bonne réponse ! 🎉 Score: ${score}`;
feedbackDiv.style.color = "green";
} else {
feedbackDiv.textContent = `Mauvaise réponse ❌ Score: ${score}`;
feedbackDiv.style.color = "red";
}

// Création du bouton "Question suivante"
const nextButton = document.createElement("button");
nextButton.textContent = "Question suivante";
nextButton.classList.add("next-btn");
nextButton.addEventListener("click", nextQuestion);

feedbackDiv.appendChild(nextButton);
}

function nextQuestion() {
const feedbackDiv = document.getElementById("feedback");
feedbackDiv.innerHTML = ""; // Effacer le feedback

currentQuestionIndex++;

if (currentQuestionIndex < questions.length) {
showQuestion();
} else {
// Fin du quiz → Affichage du score final + bouton Recommencer
feedbackDiv.innerHTML = `
<p>Quiz terminé ! Votre score final est : ${score}</p>
`;

const restartButton = document.createElement("button");
restartButton.textContent = "Recommencer le quiz";
restartButton.classList.add("restart-btn");
restartButton.addEventListener("click", restartQuiz);

feedbackDiv.appendChild(restartButton);
}
}

function restartQuiz() {
score = 0;
currentQuestionIndex = 0;
document.getElementById("feedback").innerHTML = "";
showQuestion();
}

// Lancer le quiz
showQuestion();