// Получаем кнопку "Custom"
const customButton = document.querySelector('.custom-in .btn-width');

// Получаем блок conveyor-belt-title
const conveyorBeltTitle = document.querySelector('.conveyor-belt-title');

// Добавляем обработчик события на клик по кнопке "Custom"
customButton.addEventListener('click', () => {
  // Проверяем, есть ли у блока conveyor-belt-title класс is-hidden
  const isHidden = conveyorBeltTitle.classList.contains('is-hidden');
  
  // Если класс is-hidden есть, удаляем его, иначе добавляем
  if (isHidden) {
    conveyorBeltTitle.classList.remove('is-hidden');
  } else {
    conveyorBeltTitle.classList.add('is-hidden');
  }
});

document.addEventListener('DOMContentLoaded', function () {
    const lengthResult = document.querySelector('.length-result');
    const btnDecr = document.querySelector('.btn-decrement');
    const btnIncr = document.querySelector('.btn-increment');
  
    let lengthValue = 1;
  
    // Функция для обновления значения и его отображения
    function updateLengthValue() {
      lengthResult.textContent = lengthValue + '"';
    }
  
    // Обработчик клика на кнопку уменьшения
    btnDecr.addEventListener('click', function () {
      if (lengthValue > 1) {
        lengthValue--;
        updateLengthValue();
      }
    });
  
    // Обработчик клика на кнопку увеличения
    btnIncr.addEventListener('click', function () {
      lengthValue++;
      updateLengthValue();
    });
  });
  