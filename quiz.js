// Define the questions and their respective options
const questions = [
    {
        question: "How many times a week can you have a full one-hour lunch at work?",
        options: ["3-5", "2-3", "1-2", "Never"],
    },
    {
        question: "How many unread emails are there in your inbox?",
        options: ["<1001", "501-1000", "51-500", ">50"],
    },
    {
        question: "How many new people do you meet at work in a week?",
        options: ["-5", "2-3", "1-2", "0"],
    },
    {
        question: "How many programming languages do you know?",
        options: ["1", "1-3", "3-6", "6-10"],
    }
];

// Function to render questions and options
function renderQuiz() {
    const quizContainer = document.getElementById('quiz-container');

    questions.forEach((ques, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${ques.question}</p>`;

        ques.options.forEach((opt, optIndex) => {
            const optionBtn = document.createElement('button');
            optionBtn.textContent = opt;
            optionBtn.setAttribute('data-question', index);
            optionBtn.setAttribute('data-option', optIndex);
            optionBtn.addEventListener('click', handleOptionSelection);
            questionDiv.appendChild(optionBtn);
        });

        quizContainer.appendChild(questionDiv);
    });
}

// Function to handle option selection
function handleOptionSelection(event) {
    const selectedQuestion = event.target.getAttribute('data-question');
    const selectedOption = event.target.getAttribute('data-option');

    // Logic to process the selected option

    console.log(`Question ${parseInt(selectedQuestion) + 1}, Option ${parseInt(selectedOption) + 1} selected.`);
}

// Render the quiz when the page loads
window.onload = function() {
    renderQuiz();
};
