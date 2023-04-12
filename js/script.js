const submit = document.getElementById("form-submit");
const modal = document.getElementById("modal");

submit.addEventListener('click', () => {
    modal.classList.toggle('display-none')
    // modal.classList.replace('display-none', 'display-block')
});

