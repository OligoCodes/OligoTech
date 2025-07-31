 // Theme Toggle Functionality
     function toggleTheme() {
            document.body.classList.toggle('lightMode');
            const themeIcon = document.querySelector('.theme-toggle i');
            if (document.body.classList.contains('lightMode')) {
                themeIcon.className = 'fas fa-sun';
            } else {
                themeIcon.className = 'fas fa-moon';
            }
        }
