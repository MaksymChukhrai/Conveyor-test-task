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
