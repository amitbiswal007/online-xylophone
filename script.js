let currentHeight = 70
const playSongBtns = document.querySelectorAll(".playSongBtns")
playSongBtns.forEach(btn => {

    currentHeight = currentHeight * 0.9
    btn.style.height = currentHeight + 'vh';


    btn.addEventListener('click', () => {


        const audio = new Audio("assets/note" + btn.getAttribute('data-name') + ".wav");
        audio.play();



    })


});
