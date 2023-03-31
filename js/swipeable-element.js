export default (() => {
    const swipeButton = document.querySelectorAll('.swipeButton');
    const modalProduct = document.querySelectorAll('.modalProduct');
    swipeButton.forEach((button) => {
        button.addEventListener('click', () => {
            modalProduct.classList.toggle('active');
        });
    });
})();