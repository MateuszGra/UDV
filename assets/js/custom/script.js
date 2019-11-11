let udvError;

const createTooltip = (text, parent) => {
    udvError = document.createElement('div');
    udvError.classList.add('udv-tooltip');
    udvError.textContent = text;
    parent.appendChild(udvError);
    return false;
}

const udvalidation = () => {
    const inputs = document.querySelectorAll('#udv-input');

    for (let i = 0; i < inputs.length; i++) {
        const label = inputs[i].parentElement;
        if (udvError) udvError.remove();

        if (inputs[i].dataset.req == 'true') {
            if (inputs[i].type != 'checkbox' && inputs[i].value == '') {
                inputs[i].focus();
                return createTooltip('This field is required.', label)
            }

            if (inputs[i].type == 'checkbox' && inputs[i].checked == false) {
                return createTooltip('Wymagana zgoda.', label)
            }

            if (!inputs[i].value.match(inputs[i].dataset.reg)) {
                inputs[i].focus();
                return createTooltip('Invalid field value ', label)
            }
        }
    }

    return true;

}

const udvForm = document.querySelectorAll('#udv-sumbit');

udvForm.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        udvalidation();
    })
})