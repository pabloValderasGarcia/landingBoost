// Open nav-mobile on click
document.getElementById("nav-menu").addEventListener("click", () => {
    document.getElementById("nav-mobile").classList.toggle("nav-mobile-open");
});

// Open question dropdown on click
document.querySelectorAll('.dropdown-title').forEach((title) => {
    title.addEventListener('click', () => {
        const wrapper = title.nextElementSibling;
        const content = wrapper.querySelector('.dropdown-content');

        // If it's opened and it's the same, close it
        if (title.classList.contains('open')) {
            title.classList.remove('open');
            wrapper.classList.remove('open');
            wrapper.style.height = '0';
        } else {
            // Close all of them if it's another one
            document.querySelectorAll('.dropdown-title.open').forEach((openTitle) => {
                openTitle.classList.remove('open');
                openTitle.nextElementSibling.classList.remove('open');
                openTitle.nextElementSibling.style.height = '0';
            });

            title.classList.add('open');
            wrapper.classList.add('open');
            wrapper.style.height = '0';
            wrapper.style.height = `${content.scrollHeight}px`;
        }
    });
});
