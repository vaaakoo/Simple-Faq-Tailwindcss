document.querySelector('#search-input').
addEventListener('input', filterList)

function filterList() {
const searchInput = document.querySelector('#search-input');
const filter = searchInput.value.toLowerCase();
const listItem = document.querySelectorAll('.acordion-class');
const parentAcordion = document.querySelector('.parentAcordion');


listItem.forEach((item) => {
    let text = item.textContent
    let grandParent = item.parentElement.parentElement;
    if (text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
        item.style.display = '';
        grandParent.style.border = '';
        parentAcordion.style.gap = '';
    }
    else {
        item.style.display = 'none';
        parentAcordion.style.gap = '1px';
        grandParent.style.border = 'none';
    }
});
}