document.addEventListener('DOMContentLoaded', function () {
  // Получаем все скрытые чекбоксы
  const checkboxInputs = document.querySelectorAll(".visually-hidden");

  // Указываем абсолютный путь к файлу спрайта
  const iconPathChecked = "https://maksymchukhrai.github.io/Conveyor-test-task/blob/main/img/icons/Checkbox_cheked.png";
  const iconPathUnchecked = "https://maksymchukhrai.github.io/Conveyor-test-taskblob/blob/main/img/icons/Checkbox.png";

  // Добавляем обработчик события для каждого чекбокса
  checkboxInputs.forEach(checkboxInput => {
    // Получаем элемент иконки чекбокса
    const checkboxIcon = checkboxInput.parentElement.querySelector(".checkbox-icon svg use");

    // Добавляем обработчик события изменения состояния чекбокса
    checkboxInput.addEventListener("change", event => {
      if (event.target.checked) {
        // Устанавливаем путь к иконке чекбокса при выборе
        checkboxIcon.setAttribute("href", iconPathChecked);
      } else {
        // Устанавливаем путь к иконке чекбокса при снятии выбора
        checkboxIcon.setAttribute("href", iconPathUnchecked);
      }
    });
  });
});