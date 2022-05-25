const radios = document.querySelectorAll('.radio');

radios.forEach(radio => {
    radio.addEventListener('click', highlightLabel);
});

function highlightLabel(event) {
    const radio = event.target;
    const radioId = radio.id;
    const label = document.querySelector('label[for=' + radioId + ']');
    console.log(label);
    console.log(radio);
    if (radio.checked) {
        label.classList.add('question__answer-text_chose');
    } else {
        label.classList.remove('question__answer-text_chose');
    }
}
