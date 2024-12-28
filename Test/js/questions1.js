document.getElementById('questions-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    // Сбор данных из формы
    const answers = getAnswers();

    if (!answers) {
        showNotification('Пожалуйста, заполните все поля перед отправкой.');
        return;
    }

    // Правильные ответы
    const correctAnswers = {
        q1a: '4', q1b: '6', q1c: '1', q1d: '2', q1e: '3', // Вопрос 1
        q2: '1',                                          // Вопрос 2
        q3a: '1', q3b: '3', q3c: '4', q3d: '2'            // Вопрос 3
    };

    // Подсчёт правильных ответов
    const correctCount = countCorrectAnswers(answers, correctAnswers);

    // Переход на страницу результатов
    window.location.href = `results1.html?correct=${correctCount}&total=${Object.keys(correctAnswers).length}`;
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

    // Сбор данных из текстовых полей
    ['q1a', 'q1b', 'q1c', 'q1d', 'q1e'].forEach((name) => {
        const value = document.querySelector(`input[name="${name}"]`).value.trim();
        if (!value) return null;
        answers[name] = value;
    });

    // Сбор данных из радиокнопок
    const selectedOptionQ2 = document.querySelector('input[name="q2"]:checked');
    if (!selectedOptionQ2) return null;
    answers.q2 = selectedOptionQ2.value;

    // Сбор данных из выпадающих списков
    ['q3a', 'q3b', 'q3c', 'q3d'].forEach((name) => {
        const value = document.querySelector(`select[name="${name}"]`).value;
        if (!value) return null;
        answers[name] = value;
    });

    return answers;
}

// Функция для подсчёта правильных ответов
function countCorrectAnswers(userAnswers, correctAnswers) {
    return Object.keys(correctAnswers).reduce((count, key) => {
        return count + (userAnswers[key] === correctAnswers[key] ? 1 : 0);
    }, 0);
}