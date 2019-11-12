"use strict";

var udvForm = document.querySelectorAll('#udv-sumbit');
udvForm.forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    udvalidation('#udv-sumbit');
  });
});
"use strict";

var udvError;

var createTooltip = function createTooltip(text, parent) {
  udvError = document.createElement('div');
  udvError.classList.add('udv-tooltip');
  udvError.textContent = text;
  parent.appendChild(udvError);
  return false;
};

var udvalidation = function udvalidation(container) {
  var inputs = document.querySelectorAll("".concat(container, " input[data-req=\"true\"]"));

  for (var i = 0; i < inputs.length; i++) {
    var label = inputs[i].parentElement;
    if (udvError) udvError.remove();

    if (inputs[i].type != 'checkbox' && inputs[i].value == '') {
      inputs[i].focus();
      return createTooltip('This field is required.', label);
    }

    if (inputs[i].type == 'checkbox' && inputs[i].checked == false) {
      return createTooltip('Checkbox required', label);
    }

    if (!inputs[i].value.match(inputs[i].dataset.reg)) {
      inputs[i].focus();
      return createTooltip('Invalid field value ', label);
    }
  }

  return true;
}; //delete tootlip 


document.body.addEventListener('click', function () {
  if (udvError) udvError.remove();
});
document.body.addEventListener('touch', function () {
  if (udvError) udvError.remove();
});