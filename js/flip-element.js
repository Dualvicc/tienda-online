export default (() => {
    const contactButton = document.querySelectorAll(".contactCardButton")
    contactButton.forEach(contactButton => {
        contactButton.addEventListener("click",()=>{
            contactButton.closest('.contactCard').classList.toggle('active');
        })
    })
})();