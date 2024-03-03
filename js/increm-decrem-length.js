document.addEventListener('DOMContentLoaded', function() {
    // Получаем кнопки инкремента и декремента
    const incrButton = document.querySelector('.btn-incr-length');
    const decrButton = document.querySelector('.btn-decr-length');
    const lengthResult = document.querySelector('.js-length-result');

    // Устанавливаем начальное значение
    let lengthValue = 10;

    // Функция для обновления значения и отображения результата
    function updateLength() {
        lengthResult.textContent = ` ${lengthValue}"`;
    }

    // Обработчик клика на кнопку инкремента
    incrButton.addEventListener('click', function() {
        lengthValue += 5;
        updateLength();
    });

    // Обработчик клика на кнопку декремента
    decrButton.addEventListener('click', function() {
        // Значение не должно быть меньше 0
        if (lengthValue >= 5) {
            lengthValue -= 5;
            updateLength();
        }
    });

    // Инициализация значения
    updateLength();
});

