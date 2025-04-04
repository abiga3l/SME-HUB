document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            alert('You clicked on: ' + link.textContent);
            window.location.href = link.getAttribute('href'); 
        });
    });
});