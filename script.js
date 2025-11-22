// Tâche : Créer un tableau questions contenant un premier objet questionTest
const questions = [
    {
    // Tâche : Ajouter les propriétés image, question, options, correctAnswer
    image: "assets/images/test.jpg",
    question: "Quel joueur se trouve sur cette image ?",
    options: ["Mbappé", "Messi", "Ronaldo"],
    correctAnswer: "Mbappé"
    },
    {
        image: "assets/images/test2.jpg", // Exemple de 2e question
        question: "Quel est le plus grand pays du monde ?",
        options: ["Chine", "Russie", "USA"],
        correctAnswer: "Russie"
    }
    ];

    // Variable pour stocker le score
    let score = 0;
    let currentQuestionIndex = 0;

    function showQuestion() {
        // On récupère la première question du tableau
        const q = questions[currentQuestionIndex];
        
        // Sélection des éléments HTML où injecter le contenu
        const questionDiv = document.getElementById("question");
        const optionsDiv = document.getElementById("options");
        const feedbackDiv = document.getElementById("feedback");

        // Injection de l'image + du texte de la question dans le DOM
        questionDiv.innerHTML = `
        <img src="${q.image}" alt="image de la question" width="200">
        <p>${q.question}</p>
        `;
        
       showOptions(q);
   
    }

    function showOptions(q) {
        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";
        answerLocked = false; // On réactive les clics pour la nouvelle question
    
        q.options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.classList.add("option-btn");
    
            btn.addEventListener("click", () => {
                if (!answerLocked) {
                    answerLocked = true; // On bloque tous les clics
                    checkAnswer(option);
                }
            });
    
            optionsDiv.appendChild(btn);
        });
    }
    

    function checkAnswer(selected) {
        const q = questions[currentQuestionIndex];
        const feedbackDiv = document.getElementById("feedback");
    
        // Désactivation de tous les boutons
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

    // Afficher le bouton "Suivant"
    const nextButton = document.createElement("button");
    nextButton.textContent = "Question suivante";
    nextButton.classList.add("next-btn");
    nextButton.addEventListener("click", nextQuestion);

    // Ajouter le bouton suivant à la page
    feedbackDiv.appendChild(nextButton);

    // Attendre 3 secondes avant de passer à la question suivante automatiquement
    setTimeout(nextQuestion, 2000);
}

function nextQuestion() {
    // Passer à la question suivante
    currentQuestionIndex++;

    // Vérifier si on a encore des questions à afficher
    if (currentQuestionIndex < questions.length) {
        // Réinitialiser la section feedback et afficher la nouvelle question
        document.getElementById("feedback").innerHTML = "";
        showQuestion();
    } else {
        // Si on a fini toutes les questions, afficher un message de fin
        const feedbackDiv = document.getElementById("feedback");
        feedbackDiv.textContent = `Quiz terminé ! Votre score final est : ${score}`;
    }
}
        // Appel de la fonction ici, en dehors
        showQuestion();

