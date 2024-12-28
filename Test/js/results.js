// results.js

// Получаем параметры из URL
const urlParams = new URLSearchParams(window.location.search);
const correctAnswers = parseInt(urlParams.get('correct'), 10);
const currentStage = parseInt(urlParams.get('stage'), 10);

// Элементы на странице
const resultText = document.getElementById('result-text');
const retryBtn = document.getElementById('retry-btn');
const nextBtn = document.getElementById('next-btn');

// Устанавливаем текст результата
if (correctAnswers === 3) {
    resultText.textContent = 'Ты молодец!';
    nextBtn.style.display = 'inline-block';
} else {
    resultText.textContent = 'Ты не справился!';
    nextBtn.style.display = 'none';
}

// Кнопка повторной попытки
retryBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Кнопка перехода на следующий этап
nextBtn.addEventListener('click', () => {
    const nextStage = currentStage + 1;
    if (nextStage > 3) {
        alert('Все этапы завершены!');
    } else {
        window.location.href = `index.html?unlockStage=${nextStage}`;
    }
});