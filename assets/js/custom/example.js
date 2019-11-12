const udvForm = document.querySelectorAll('#udv-sumbit');

udvForm.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        udvalidation('#udv-sumbit');
    })
})