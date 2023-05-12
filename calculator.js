// Get the display element
const display = document.getElementById('display');
let ansValue = 0; // Variable to store the previous answer

// Add event listener to buttons
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    const currentDisplayValue = display.value;

    switch (value) {
      case '=':
        try {
          display.value = eval(currentDisplayValue);
          ansValue = display.value;
        } catch (error) {
          display.value = 'Error';
        }
        break;
      case 'C':
        display.value = '';
        break;
      case '√':
        display.value = Math.sqrt(parseFloat(currentDisplayValue));
        break;
      case 'x^2':
        display.value = parseFloat(currentDisplayValue) ** 2;
        break;
      case 'Ans':
        display.value = ansValue;
        break;
      default:
        if (display.value === 'Error') {
          display.value = value;
        } else {
          display.value += value;
        }
        break;
    }
  });
});
