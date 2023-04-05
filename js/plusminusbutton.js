export default (() => {
    const amountButton = document.querySelectorAll('.amountButton');
    amountButton.forEach((button) => {
        const productAmount = button.closest('.plusMinusButton').querySelector('#productAmount');
        button.addEventListener('click', () => {
            if(button.classList.contains('minusButton') && productAmount.value > 1){
                productAmount.value = parseInt(productAmount.value) - 1;
            }if(button.classList.contains('plusButton')){
                productAmount.value = parseInt(productAmount.value) + 1;
            }
        });
    });
})();