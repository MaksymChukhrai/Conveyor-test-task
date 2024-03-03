// Получаем все чекбоксы
const checkboxInputs = document.querySelectorAll('.visually-hidden');

// Определяем текущее окружение (локальное или не локальное)
const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

// Проходимся по каждому чекбоксу и добавляем обработчик события
checkboxInputs.forEach(checkboxInput => {
  // Получаем соответствующий иконке чекбокса элемент
  const checkboxIcon = checkboxInput.parentElement.querySelector('.checkbox-icon svg use');

  // Добавляем обработчик события для изменения состояния чекбокса
  checkboxInput.addEventListener('change', (event) => {
    if (event.target.checked) {
      // Меняем иконку на нажатое состояние
      const iconPath = isLocalhost ? '../../Conveyor-test-task/img/icons/sprite.svg#icon-checkbox-2' : '../img/icons/sprite.svg#icon-checkbox-2';
      checkboxIcon.setAttribute('href', iconPath);
    } else {
      // Возвращаем исходную иконку
      const iconPath = isLocalhost ? '../../Conveyor-test-task/img/icons/sprite.svg#icon-checkbox' : '../img/icons/sprite.svg#icon-checkbox';
      checkboxIcon.setAttribute('href', iconPath);
    }
  });
});
