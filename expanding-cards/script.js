const cards = document.getElementsByClassName("card");

for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
        document.querySelector('.active').classList.remove('active');
        cards[i].classList.add('active');
    })
}