const input = document.querySelector('input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const eventTurget = event.currentTarget;
    if (eventTurget.value.length < eventTurget.dataset.length
        || eventTurget.value.length > eventTurget.dataset.length) {
        eventTurget.classList.contains('valid')
            ? eventTurget.classList.replace('valid', 'invalid')
            : eventTurget.classList.add('invalid');
    } else {
        eventTurget.classList.contains('invalid')
            ? eventTurget.classList.replace('invalid', 'valid')
            : eventTurget.classList.add('valid');
    }
}