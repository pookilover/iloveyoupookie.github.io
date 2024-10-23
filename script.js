const loveButton = document.getElementById('loveButton');
const message = document.getElementById('message');

loveButton.addEventListener('click', () => {
    message.style.transform = 'scale(1.1)';
    setTimeout(() => {
        message.style.transform = 'scale(1)';
    }, 300);
});
