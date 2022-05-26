const radios = document.querySelectorAll('.radio');
const radioGroup = Array.from(radios).reduce((prev, radio) => {
    if (radio.name in prev) {
        prev[radio.name] = [...prev[radio.name], radio.id];
    } else {
        prev[radio.name] = [radio.id];
    }
    return prev;
}, {});

radios.forEach(radio => {
    radio.addEventListener('click', highlightRadioLabel);
});

function highlightRadioLabel(event) {
    const radio = event.target;
    const radioId = radio.id;
    const label = document.querySelector('label[for=' + radioId + ']');

    if (radio.checked) {
        label.classList.add('question__answer-text_chose');
    }

    const filterIds = radioGroup[radio.name].filter(element => element !== radio.id);

    filterIds.forEach(id => {
        document.querySelector('label[for=' + id + ']').classList.remove('question__answer-text_chose');
    });
}
