// Напиши скрипт, который бы при потере фокуса на инпуте,
//  проверял его содержимое на правильное количество символов.

{
  /* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/> */
}

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector('#validation-input');

const inputBorder = function (event) {
  input.classList.add('invalid');

  switch (event.currentTarget.value.length) {
    case Number(event.target.dataset.length):
      input.classList.replace('invalid', 'valid');
      break;
    case 0:
      input.classList.remove('invalid');
      break;
  }
};
input.addEventListener('input', inputBorder);
