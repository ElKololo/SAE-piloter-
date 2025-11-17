// Tâche : Créer un tableau questions contenant un premier objet questionTest
const questions = [
    {
    // Tâche : Ajouter les propriétés image, question, options, correctAnswer
    image: "assets/images/test.jpg",
    question: "Quel joueur se trouve sur cette image ?",
    options: ["Mbappé", "Messi", "Ronaldo"],
    correctAnswer: "Mbappé"
    }
    ];

    function showQuestion() {
        // On récupère la première question du tableau
        const q = questions[0];
        
        // Sélection des éléments HTML où injecter le contenu
        const questionDiv = document.getElementById("question");
        const optionsDiv = document.getElementById("options");
        const feedbackDiv = document.getElementById("feedback");

        // Injection de l'image + du texte de la question dans le DOM
        questionDiv.innerHTML = `
        <img src="${q.image}" alt="image de la question" width="200">
        <p>${q.question}</p>
        `;
        
        //  Création des boutons de réponse
        optionsDiv.innerHTML = "";  // 
        q.options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.classList.add("option-btn");

            //  Ajouter l'écouteur de clic
        btn.addEventListener("click", () => {
            checkAnswer(option);
        });
    
            optionsDiv.appendChild(btn); 
        });
    }
        // Appel de la fonction ici, en dehors
        showQuestion();

