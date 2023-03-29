export default (() => {
    const faqButtons = document.querySelectorAll(".faqElementButton");
    
    faqButtons.forEach(faqButton => {
        faqButton.addEventListener("click",()=>{
            const faqElementAnswer = faqButton.closest(".faqElement").querySelector(".faqElementAnswer");
            faqElementAnswer.classList.toggle('active');
            console.log(faqElementAnswer.classList);
            if(faqElementAnswer.classList.contains('active')){
                faqButton.querySelector('img').src = "./assets/icons/minus.svg"
            }else{
                faqButton.querySelector('img').src = "./assets/icons/plus.svg"
            }
           
        })
    })
})();