function toggleCheckboxes(event) {
    let tar = event.target;

    let allListNodes = tar.parentElement.nextElementSibling.children

    Array.from(allListNodes).forEach(el => el.firstElementChild.checked = tar.checked);
}

function toggleFold(state) {
    allDetails = document.querySelectorAll("details");
    Array.from(allDetails).forEach(el => el.open = state);
}