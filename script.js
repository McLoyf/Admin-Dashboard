const stars = document.querySelectorAll('.star');
const bell = document.getElementById('bell');

bell.addEventListener('click', function() {
    bell.classList.toggle("filled");
});

stars.forEach(star => {
    star.addEventListener("click", () => {
        star.classList.toggle("filled");
    })
})