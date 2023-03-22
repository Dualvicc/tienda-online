export default (() => {
    const checkoutButtons = document.querySelectorAll(".checkoutButton")
    console.log(checkoutButtons);
    checkoutButtons.forEach(checkoutButton => {
        checkoutButton.addEventListener("click",()=>{
            const modal = document.getElementById("modal");
            modal.classList.toggle("active"); 
            console.log("hola");
        })
    })
})();