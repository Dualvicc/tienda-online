export default (() => {
    const hamburgerButtons = document.querySelectorAll(".hamburgerButton")
   
    hamburgerButtons.forEach(hamburgerButton => {
        hamburgerButton.addEventListener("click",()=>{
            hamburgerButton.classList.toggle("active");
            hamburgerButton.parentElement.classList.toggle("active");
            
            let svgs = hamburgerButton.querySelectorAll("svg");

            svgs.forEach(svg => {
                svg.classList.toggle("active");
            });
        });
    });
})();