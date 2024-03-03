// Получаем элементы DOM для кнопок увеличения и уменьшения количества
const increaseButton = document.querySelector('.btn-incr');
const decreaseButton = document.querySelector('.btn-decr');

// Получаем элемент DOM для отображения количества и цены
const amountElement = document.querySelector('.amount');
const priceElement = document.getElementById('price');

// Получаем стоимость одного конвейера
const unitPrice = 22360;

// Устанавливаем начальное количество конвейеров
let quantity = 1;

// Функция для обновления отображаемого количества и цены
function updateQuantityAndPrice() {
  // Обновляем отображаемое количество
  amountElement.textContent = quantity;
  
  // Рассчитываем новую цену
  const totalPrice = unitPrice * quantity;
  
  // Обновляем отображаемую цену
  priceElement.textContent = `$${totalPrice}`;
}

// Добавляем обработчик события для кнопки увеличения количества
increaseButton.addEventListener('click', () => {
  // Увеличиваем количество на 1
  quantity++;
  
  // Обновляем отображаемое количество и цену
  updateQuantityAndPrice();
});

// Добавляем обработчик события для кнопки уменьшения количества
decreaseButton.addEventListener('click', () => {
  // Проверяем, чтобы количество было не меньше 1
  if (quantity > 1) {
    // Уменьшаем количество на 1
    quantity--;
    
    // Обновляем отображаемое количество и цену
    updateQuantityAndPrice();
  }
});

// Инициализируем отображение начального количества и цены
updateQuantityAndPrice();


