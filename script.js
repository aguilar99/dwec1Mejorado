document.addEventListener("DOMContentLoaded", function (event) {
    document.addEventListener('copy', (evt) => {
        evt.preventDefault();

    });

    document.querySelector("#ver").addEventListener("paste", function (evt) {
        evt.preventDefault();
    });
});
