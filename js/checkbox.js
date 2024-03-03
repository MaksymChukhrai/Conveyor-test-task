// Получаем все чекбоксы
const checkboxInputs = document.querySelectorAll('.visually-hidden');

// Проходимся по каждому чекбоксу и добавляем обработчик события
checkboxInputs.forEach(checkboxInput => {
  // Получаем соответствующий иконке чекбокса элемент
  const checkboxIcon = checkboxInput.parentElement.querySelector('.checkbox-icon svg use');

  // Добавляем обработчик события для изменения состояния чекбокса
  checkboxInput.addEventListener('change', (event) => {
    if (event.target.checked) {
      // Меняем иконку на нажатое состояние
      checkboxIcon.setAttribute('href', '/Conveyor-test-task/img/icons/sprite.svg#icon-checkbox-2');
    } else {
      // Возвращаем исходную иконку
      checkboxIcon.setAttribute('href', '/Conveyor-test-task/img/icons/sprite.svg#icon-checkbox');
    }
  });
});

