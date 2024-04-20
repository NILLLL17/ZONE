(function() {
    // Function to filter wallpapers based on category
    function filterWallpapers(category) {
        const wallpapers = document.querySelectorAll('.wallpaper');

        wallpapers.forEach(wallpaper => {
            const tags = wallpaper.dataset.tags.split(',');
            if (category === 'ALL' || tags.includes(category.toUpperCase())) {
                wallpaper.style.display = 'block';
            } else {
                wallpaper.style.display = 'none';
            }
        });
    }

    // Initially filter wallpapers with 'ALL' category
    filterWallpapers('ALL');

    // Add event listeners to filter buttons
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            filterWallpapers(category);
        });
    });

    // Get modal elements
    const previewModal = document.getElementById('preview-modal');
    const previewImage = document.getElementById('preview-image');
    const previewCloseButton = document.getElementById('preview-close-button');

    // Add click event listeners to wallpapers for preview
    document.querySelectorAll('.wallpaper').forEach(wallpaper => {
        wallpaper.addEventListener('click', () => {
            const imageUrl = wallpaper.querySelector('img').getAttribute('src');
            previewImage.src = imageUrl;
            previewImage.classList.add('zoom-in'); // Zoom-in animation
            previewModal.classList.add('show');
        });
    });

    // Check if previewCloseButton exists before adding event listener
    if (previewCloseButton) {
        previewCloseButton.addEventListener('click', () => {
            previewModal.classList.remove('show');
            previewImage.classList.remove('zoom-in'); // Remove zoom-in animation
        });
    }

    // Add error handling for image loading
    document.querySelectorAll('.wallpaper img').forEach(img => {
        img.addEventListener('error', (event) => {
            console.error('Error loading image:', event.target.src);
            event.target.style.display = 'none'; // Hide the image if loading fails
        });
    });
})();

// Contact feature
document.addEventListener('DOMContentLoaded', function () {
    const openAboutDialogButton = document.getElementById('about-link');
      const closeAboutDialogButton = document.getElementById('close-about-button');
      const aboutModal = document.getElementById('about-modal');

    const openContactDialogButton = document.getElementById('open-contact-dialog');
    const closeContactDialogButton = document.getElementById('close-contact-dialog');
    const contactDialog = document.getElementById('contact-dialog');

    if (openAboutDialogButton && closeAboutDialogButton && aboutModal) {
        openAboutDialogButton.addEventListener('click', function (event) {
          event.preventDefault();
          aboutModal.style.display = 'flex';
        });

        closeAboutDialogButton.addEventListener('click', function () {
          aboutModal.style.display = 'none';
        });
      }
    
    
    
    
    
    
    
    if (openContactDialogButton && closeContactDialogButton && contactDialog) {
        openContactDialogButton.addEventListener('click', function () {
            contactDialog.style.display = 'flex';
        });

        closeContactDialogButton.addEventListener('click', function () {
            contactDialog.style.display = 'none';
        });
    }

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Get form data
            const formData = new FormData(contactForm);
            // Simulate sending the form data (you can replace this with your actual backend code)
            console.log('Form submitted!');
            console.log('Name:', formData.get('name'));
            console.log('Email:', formData.get('email'));
            console.log('Message:', formData.get('message'));
            // You can replace the console.log statements with AJAX requests to send form data to your server
            // After successful submission, you can display a success message or redirect the user to a thank you page
            // For example:
            // window.location.href = 'thank-you.html';
        });
    }
});
