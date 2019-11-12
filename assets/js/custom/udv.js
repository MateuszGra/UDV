let udvError;

const createTooltip = (text, parent) => {
    udvError = document.createElement('div');
    udvError.classList.add('udv-tooltip');
    udvError.textContent = text;
    parent.appendChild(udvError);
    return false;
}

const udvalidation = (container) => {
    const inputs = document.querySelectorAll(`${container} input[data-req="true"]`);

    for (let i = 0; i < inputs.length; i++) {
        const label = inputs[i].parentElement;
        if (udvError) udvError.remove();

        if (inputs[i].type != 'checkbox' && inputs[i].value == '') {
            inputs[i].focus();
            return createTooltip('This field is required.', label)
        }

        if (inputs[i].type == 'checkbox' && inputs[i].checked == false) {
            return createTooltip('Checkbox required', label)
        }

        if (!inputs[i].value.match(inputs[i].dataset.reg)) {
            inputs[i].focus();
            return createTooltip('Invalid field value ', label)
        }
    }

    return true;
}

//delete tootlip 
document.body.addEventListener('click', () => {
    if (udvError) udvError.remove();
})

document.body.addEventListener('touch', () => {
    if (udvError) udvError.remove();
})