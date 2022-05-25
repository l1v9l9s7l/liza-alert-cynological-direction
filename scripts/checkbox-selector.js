const checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', highlightLabel);
});

function highlightLabel(event) {
    const checkbox = event.target;
    const checkboxId = checkbox.id;
    const label = document.querySelector('label[for=' + checkboxId + ']');
    if (checkbox.checked) {
        label.classList.add('question__answer-text_chose');
    } else {
        label.classList.remove('question__answer-text_chose');
    }
}
