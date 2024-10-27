const clearButton = document.querySelector('.clear-button');
const content = document.querySelector('body');
const message = document.querySelector('.message');

clearButton.addEventListener('click', () => {
    content.innerHTML = ''; 
    content.appendChild(message); 
    message.classList.remove('hidden'); 
});
