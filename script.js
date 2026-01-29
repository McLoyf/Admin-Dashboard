const star = document.getElementById('star');
const bell = document.getElementById('bell');

star.addEventListener('click', function() {
    star.classList.toggle("filled");
});

bell.addEventListener('click', function() {
    bell.classList.toggle("filled");
});