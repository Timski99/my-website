document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const pages = document.querySelectorAll('.page-content');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetPage = document.getElementById(this.getAttribute('data-target'));
            
            // Add the turn effect to the current active page
            const activePage = document.querySelector('.page-content.active');
            if (activePage) {
                activePage.classList.add('turn');
            }
            
            // Wait for the page flip to finish, then swap the content
            setTimeout(() => {
                if (activePage) {
                    activePage.classList.remove('active', 'turn');
                }

                targetPage.classList.add('active');
                targetPage.classList.remove('turn');
            }, 1000); // Wait for the page turn effect to finish
        });
    });
});
