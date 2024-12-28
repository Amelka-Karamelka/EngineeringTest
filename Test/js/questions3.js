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
        q1: '1', // Вопрос 1
        q2: '1', // Вопрос 2
        q3: '1', // Вопрос 3
        q4: ['1', '1', '1', '1', '1', '1'], // Шесть правильных картинок
    };

    // Подсчёт правильных ответов
    const correctCount = countCorrectAnswers(answers, correctAnswers);

    // Переход на страницу результатов
    window.location.href = `results3.html?correct=${correctCount}&total=${Object.keys(correctAnswers).length}`;
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

    // Сбор данных из радиокнопок
    ['q1', 'q2', 'q3'].forEach((question) => {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (!selectedOption) return null;
        answers[question] = selectedOption.value;
    });

    // Сбор данных из чекбоксов для вопроса 4
    const selectedCheckboxes = Array.from(document.querySelectorAll('input[name="q4"]:checked'));
    if (selectedCheckboxes.length !== 6) return null; // Проверяем, выбрано ли ровно 6 картинок
    answers.q4 = selectedCheckboxes.map((checkbox) => checkbox.value);

    return answers;
}

// Функция для подсчёта правильных ответов
function countCorrectAnswers(userAnswers, correctAnswers) {
    let count = 0;

    // Проверка радиокнопок (q1, q2, q3)
    ['q1', 'q2', 'q3'].forEach((key) => {
        if (userAnswers[key] === correctAnswers[key]) {
            count++;
        }
    });

    // Проверка чекбоксов для q4
    if (
        userAnswers.q4 &&
        JSON.stringify(userAnswers.q4.sort()) === JSON.stringify(correctAnswers.q4.sort())
    ) {
        count++;
    }

    return count;
}