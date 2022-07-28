const input = document.querySelector('input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const eventTurget = event.currentTarget;
    if (eventTurget.value.length < eventTurget.dataset.length
        || eventTurget.value.length > eventTurget.dataset.length) {
        if (eventTurget.classList.contains('valid')) {
            eventTurget.classList.replace('valid', 'invalid');
        } else { eventTurget.classList.add('invalid'); };
    } else {
        if (eventTurget.classList.contains('invalid')) {
            eventTurget.classList.replace('invalid', 'valid');
        } else { eventTurget.classList.add('valid'); };
    }
}