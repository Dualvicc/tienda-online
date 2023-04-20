export default (() => {
    const inputLimited = document.querySelectorAll(".inputLimited");
    inputLimited.forEach(element => {
        const maxLength = element.getAttribute('maxLength');
        const inputLimit = element.parentElement.querySelector(".inputLimit");
        element.addEventListener("input",()=>{
            const chars = element.value.length;
            inputLimit.innerHTML =`${chars}/${maxLength} `;
        })
    })
})();