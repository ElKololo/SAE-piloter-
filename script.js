// Tâche : Créer un tableau questions contenant un premier objet questionTest
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
    const feedbackDiv = document.getElementById("feedback");
    feedbackDiv.innerHTML = ""; // Effacer le feedback

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

