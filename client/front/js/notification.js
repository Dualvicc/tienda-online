export default  (() => {
    document.addEventListener("message", (event =>{

        const notification = document.getElementById("notification");
        const notificationText = document.querySelector(".notificationProduct");
        
        notificationText.innerHTML = event.detail.text;
        notification.classList.add(event.detail.type);
        notification.classList.add("active");

        setTimeout(() => {
            notification.classList.remove("active");
            notification.classList.remove(event.detail.type);
        }, 3000);
    }));
})();