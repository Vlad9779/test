function modalShow() {
    let modal = document.getElementById('login-modal');
    modal.classList.remove("hidden");
    setTimeout(function () {
        modal.classList.remove('visually-hidden');
    }, 10);
}
function modalHide() {
    let modal = document.getElementById('login-modal');
    modal.classList.add('visually-hidden');
    setTimeout(function () {
        modal.classList.remove('hidden');
    }, 10);
}

function validate() {
    let form = document.getElementById('login-form');
    form.classList.add('submitted');
}

