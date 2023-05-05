export default (() => {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tabContent");
    
    tabs.forEach(tab => {
        tab.addEventListener("click",()=>{

            const tabDataset = tab.dataset.tab;

            tabs.forEach(tab =>{
                tab.classList.remove("active");
            })

            tab.classList.add("active");

            tabContents.forEach(tabContent => {
                if(tabContent.classList.contains("active")){
                    tabContent.classList.remove("active");
                }
                if(tabContent.dataset.tab === tabDataset){
                    tabContent.classList.add("active");
                }
            })
        })
    })
})();