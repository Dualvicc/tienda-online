export default (() => {
    const modalButtons = document.querySelectorAll(".modalButton")
    const modal = document.getElementById("modal");
   
    modalButtons.forEach(modalButton => {
        modalButton.addEventListener("click",()=>{
            modal.classList.toggle("active"); 
        })
    })
})();