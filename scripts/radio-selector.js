const radios = document.querySelectorAll('.radio');
const radioGroup = Array.from(radios).reduce((prev, radio) => {
    console.log('Starts');
	console.log(`RadioName:${radio.name}`);
    console.log(prev);
	console.log('prevUp')
    if (prev[radio.name] === undefined) {
        console.log('If');
        return prev[radio.name] = [radio.id];
    }
    console.log('afterIf', prev);
    return prev[radio.name].push(radio.id);
}, {});
console.log(radioGroup);

radios.forEach(radio => {
    radio.addEventListener('click', highlightLabel);
});

function highlightLabel(event) {
    const radio = event.target;
    const radioId = radio.id;
    console.log(radioId);
    const label = document.querySelector('label[for=' + radioId + ']');

    console.log(label);
    console.log(radio);
    if (radio.checked) {
        label.classList.add('question__answer-text_chose');
    } else {
        label.classList.remove('question__answer-text_chose');
    }
}
