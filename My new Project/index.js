const clearButton = document.querySelector('.clear-button');
const content = document.querySelector('body');
const message = document.querySelector('.message');

clearButton.addEventListener('click', () => {
    content.innerHTML = ''; // Clear all content
    content.appendChild(message); // Append the message to the body
    message.classList.remove('hidden'); // Show the trick message
});
