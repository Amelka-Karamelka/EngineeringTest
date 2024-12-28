// Получение данных из URL
const urlParams = new URLSearchParams(window.location.search);
const correct = parseInt(urlParams.get('correct'), 10) || 0;
const total = parseInt(urlParams.get('total'), 10) || 0;

// Элементы страницы
const resultText = document.getElementById('result-text');
const retryBtn = document.getElementById('retry-btn');
const nextBtn = document.getElementById('next-btn');

// Функция для отображения результата
function displayResult(correct, total) {
    if (correct === total) {
        resultText.textContent = `Поздравляем! Вы правильно ответили на все ${total} вопросов.`;
        resultText.style.color = 'green';
        nextBtn.style.display = 'inline-block';
        retryBtn.style.display = 'none'; // Скрываем кнопку "Пройти ещё раз"
        localStorage.setItem('stage2Completed', 'true');
    } else {
        resultText.textContent = `Вы правильно ответили на ${correct} из ${total} вопросов. Попробуйте ещё раз!`;
        resultText.style.color = 'red';
        retryBtn.style.display = 'inline-block';
    }
}

// Добавление обработчиков событий к кнопкам
function addEventListeners() {
    retryBtn.addEventListener('click', () => {
        window.location.href = 'questions2.html'; // Возврат к вопросам этапа 2
    });

    nextBtn.addEventListener('click', () => {
        window.location.href = 'index.html'; // Переход на главную страницу
    });
}

// Инициализация страницы
function init() {
    displayResult(correct, total);
    addEventListeners();
}

// Запуск инициализации
init();