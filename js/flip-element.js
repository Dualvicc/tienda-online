export default (() => {
    const flipButtons = document.querySelectorAll(".flipButton")
    flipButtons.forEach(flipButton => {
        flipButton.addEventListener("click",()=>{
            flipButton.closest('.contactCard').classList.toggle('active');
        })
    })
})();