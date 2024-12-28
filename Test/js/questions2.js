document.getElementById('questions-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const answers = getAnswers();

    if (!answers) {
        showNotification('Пожалуйста, заполните все поля перед отправкой.');
        return;
    }

    const correctAnswers = {
        q1: '1',
        q2: '1',
        q3: '1',
    };

    const correctCount = countCorrectAnswers(answers, correctAnswers);

    window.location.href = `results2.html?correct=${correctCount}&total=${Object.keys(correctAnswers).length}`;
});

// Функция для отображения всплывающего уведомления
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');

    // Убираем уведомление через 3 секунды
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Функция для сбора данных из формы
function getAnswers() {
    const answers = {};

    ['q1', 'q2', 'q3'].forEach((question) => {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption) {
            answers[question] = selectedOption.value;
        }
    });

    return Object.keys(answers).length === 3 ? answers : null;
}

// Функция для подсчёта правильных ответов
function countCorrectAnswers(userAnswers, correctAnswers) {
    return Object.keys(correctAnswers).reduce((count, key) => {
        return count + (userAnswers[key] === correctAnswers[key] ? 1 : 0);
    }, 0);
}