
document.querySelector('.header__form').addEventListener('submit', function(event) {
    event.preventDefault();  // Запобігає відправці форми

    const emailInput = document.querySelector('.header__form-input');
    const message = document.querySelector('.header__form-message');

    // Перевірка, чи заповнений інпут
    if (emailInput.value.trim() === '') {
        // Якщо інпут порожній
        emailInput.classList.add('error');  // Додаємо червоний бордер
        message.style.display = 'inline';   // Показуємо повідомлення
    } else {
        // Якщо інпут заповнений
        emailInput.classList.remove('error');  // Прибираємо червоний бордер
        message.style.display = 'none';         // Прибираємо повідомлення
    }
});
