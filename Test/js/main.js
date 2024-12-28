// main.js

// Получаем ссылки на изображения
const image1 = document.querySelector('.img1');
const image2 = document.querySelector('.img2');
const image3 = document.querySelector('.img3');

document.addEventListener('DOMContentLoaded', () => {
    const stage1Completed = localStorage.getItem('stage1Completed') === 'true';
    const stage2Completed = localStorage.getItem('stage2Completed') === 'true';
    const stage3Completed = localStorage.getItem('stage3Completed') === 'true';

    if (!stage1Completed) {
        // Меняем стили фотографий
        image2.style.filter = 'grayscale(100%)'; // Делаем черно-белой
        image2.style.pointerEvents = 'none'; // Блокируем нажатие
        image3.style.filter = 'grayscale(100%)'; // Делаем черно-белой
        image3.style.pointerEvents = 'none'; // Блокируем нажатие

        image1.style.filter = 'none';            // Оставляем цветной
        image1.style.pointerEvents = 'auto'; // Убедимся, что клики работают
    }
    
    if (stage1Completed) {
        // Меняем стили фотографий
        image1.style.filter = 'grayscale(100%)'; // Делаем черно-белой
        image1.style.pointerEvents = 'none'; // Блокируем нажатие
        image3.style.filter = 'grayscale(100%)'; // Делаем черно-белой
        image3.style.pointerEvents = 'none'; // Блокируем нажатие

        image2.style.filter = 'none';            // Оставляем цветной
        image2.style.pointerEvents = 'auto'; // Убедимся, что клики работают
    }

    if (stage2Completed) {
        // Меняем стили фотографий
        image2.style.filter = 'grayscale(100%)'; // Делаем черно-белой
        image2.style.pointerEvents = 'none'; // Блокируем нажатие
        image1.style.filter = 'grayscale(100%)'; // Делаем черно-белой
        image1.style.pointerEvents = 'none'; // Блокируем нажатие

        image3.style.filter = 'none';            // Оставляем цветной
        image3.style.pointerEvents = 'auto'; // Убедимся, что клики работают
    }

    if (stage2Completed) {
        // Меняем стили фотографий
        image1.style.filter = 'none';            // Оставляем цветной
        image1.style.pointerEvents = 'auto'; // Убедимся, что клики работают
        image2.style.filter = 'none';            // Оставляем цветной
        image2.style.pointerEvents = 'auto'; // Убедимся, что клики работают
        image3.style.filter = 'none';            // Оставляем цветной
        image3.style.pointerEvents = 'auto'; // Убедимся, что клики работают
    }
});

// Добавляем обработчики событий для кликов
image1.addEventListener('click', () => {
    window.location.href = 'questions1.html?stage=1';
});

image2.addEventListener('click', () => {
    window.location.href = 'questions2.html?stage=2';
});

image3.addEventListener('click', () => {
    window.location.href = 'questions3.html?stage=3';
});

// Читаем открытый этап из URL
const urlParams = new URLSearchParams(window.location.search);
const unlockStage = parseInt(urlParams.get('unlockStage'), 10) || 1;


