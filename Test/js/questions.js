// questions.js

// Получаем форму и кнопку
const form = document.getElementById('questions-form');
const submitBtn = document.getElementById('submit-btn');

// Читаем текущий этап из URL
const urlParams = new URLSearchParams(window.location.search);
const currentStage = urlParams.get('stage') || '1';

// Обработка отправки формы
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    let correctAnswers = 0;

    // Проверяем ответы
    const answers = {
        q1: '1', // Правильные ответы для текущего этапа
        q2: '1',
        q3: '1'
    };

    for (const question in answers) {
        const selected = form.elements[question].value;
        if (selected === answers[question]) {
            correctAnswers++;
        }
    }

    // Переходим на страницу результатов
    window.location.href = `results.html?correct=${correctAnswers}&stage=${currentStage}`;
});