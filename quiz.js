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

// Array to store selected answer values
let selectedAnswers = [];

// Function to handle option selection
function handleOptionSelection(event) {
    const selectedQuestion = event.target.getAttribute('data-question');
    const selectedOption = event.target.getAttribute('data-option');

    // Remove 'selected' class from all buttons of the same question
    const buttons = document.querySelectorAll(`[data-question="${selectedQuestion}"]`);
    buttons.forEach(button => button.classList.remove('selected'));

    // Add 'selected' class to the clicked button
    event.target.classList.add('selected');

    // Store the selected answer value in the array
    selectedAnswers[selectedQuestion] = parseInt(selectedOption) + 1;

    console.log(`Question ${parseInt(selectedQuestion) + 1}, Option ${parseInt(selectedOption) + 1} selected.`);
}

// Function to handle submit button click
function handleSubmit() {
    // Calculate the result based on selected answer values
    let totalScore = selectedAnswers.reduce((acc, val) => acc + val, 0);
    
    // Map total score to roles
    let role = '';
    if (totalScore >= 30 && totalScore <= 35) {
        role = 'Manager';
    } else if (totalScore >= 20 && totalScore <= 25) {
        role = 'Team Leader';
    } else if (totalScore >= 10 && totalScore <= 15) {
        role = 'Developer';
    } else {
        role = 'Intern';
    }
    
    // Output the result
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `Total Score: ${totalScore}, Role: ${role}`;
}

// Function to render questions and options
function renderQuiz() {
    const quizContainer = document.getElementById('quiz-container');

    questions.forEach((ques, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question', 'mt-4');
        questionDiv.innerHTML = `<p>${ques.question}</p>`;

        ques.options.forEach((opt, optIndex) => {
            const optionBtn = document.createElement('button');
            optionBtn.textContent = opt;
            optionBtn.classList.add('btn', 'btn-light', 'me-2');
            optionBtn.setAttribute('data-question', index);
            optionBtn.setAttribute('data-option', optIndex);
            optionBtn.addEventListener('click', handleOptionSelection);
            questionDiv.appendChild(optionBtn);
        });

        quizContainer.appendChild(questionDiv);
    });
}

// Render the quiz when the page loads
window.onload = function() {
    renderQuiz();

    // Add event listener to the submit button
    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', handleSubmit);
};
