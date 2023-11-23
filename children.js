document.addEventListener('DOMContentLoaded', function () {
    const toggleHeaders = document.querySelectorAll('.toggle');

    toggleHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            content.classList.toggle('show');
        });
    });
});
