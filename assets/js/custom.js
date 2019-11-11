"use strict";

var udvError;

var createTooltip = function createTooltip(text, parent) {
  udvError = document.createElement('div');
  udvError.classList.add('udv-tooltip');
  udvError.textContent = text;
  parent.appendChild(udvError);
  return false;
};

var udvalidation = function udvalidation() {
  var inputs = document.querySelectorAll('#udv-input');

  for (var i = 0; i < inputs.length; i++) {
    var label = inputs[i].parentElement;
    if (udvError) udvError.remove();

    if (inputs[i].dataset.req == 'true') {
      if (inputs[i].type != 'checkbox' && inputs[i].value == '') {
        inputs[i].focus();
        return createTooltip('This field is required.', label);
      }

      if (inputs[i].type == 'checkbox' && inputs[i].checked == false) {
        return createTooltip('Wymagana zgoda.', label);
      }

      if (!inputs[i].value.match(inputs[i].dataset.reg)) {
        inputs[i].focus();
        return createTooltip('Invalid field value ', label);
      }
    }
  }

  return true;
};

var udvForm = document.querySelectorAll('#udv-sumbit');
udvForm.forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    udvalidation();
  });
});