export default (() => {
    const faqButtons = document.querySelectorAll(".faqElementTitleIcon");
    
    faqButtons.forEach(faqButton => {
        faqButton.addEventListener("click",()=>{
            const faqElementAnswer = faqButton.closest(".faqElement").querySelector(".faqElementAnswer");
            faqElementAnswer.classList.toggle('active');
            const faqElementTitleIcon = faqButton.closest(".faqElementTitleIcon");
            faqElementTitleIcon.classList.toggle('active');
        })
    })
})();