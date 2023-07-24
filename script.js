const searchInput = document.getElementById('search');
const menuItems = document.querySelectorAll('.menu-item');

searchInput.addEventListener('keyup', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    menuItems.forEach((item) => {
        const itemDescription = item.querySelector('.item-description').textContent.toLowerCase();
        if (itemDescription.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
