// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = 'lightblue';
}

// Function to reset the background color when the button is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = 'white';
}

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyDisplay = document.getElementById('keyPressDisplay');
  keyDisplay.textContent = `You pressed: ${event.key}`;
}

// Function to display user input in real-time
function displayUserInput() {
  const input = document.getElementById('textInput').value;
  const display = document.getElementById('textInputDisplay');
  display.textContent = `Your input: ${input}`;
}

// Attach Event Listeners
document
  .getElementById('changeColorButton')
  .addEventListener('click', changeBackgroundColor);

document
  .getElementById('resetColorButton')
  .addEventListener('dblclick', resetBackgroundColor);

document.addEventListener('keydown', displayKeyPress);

document
  .getElementById('textInput')
  .addEventListener('input', displayUserInput);
