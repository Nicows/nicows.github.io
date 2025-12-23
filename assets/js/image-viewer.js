document.addEventListener('DOMContentLoaded', function() {
    // Create the overlay elements
    const overlay = document.createElement('div');
    overlay.className = 'image-viewer-overlay';
    
    const container = document.createElement('div');
    container.className = 'image-viewer-container';
    
    const img = document.createElement('img');
    img.className = 'image-viewer-img';
    
    const closeBtn = document.createElement('span');
    closeBtn.className = 'image-viewer-close';
    closeBtn.innerHTML = '&times;';
    
    container.appendChild(img);
    container.appendChild(closeBtn);
    overlay.appendChild(container);
    document.body.appendChild(overlay);
    
    // Function to open image
    function openImage(src) {
        img.src = src;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    // Function to close image
    function closeImage() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            img.src = ''; // Clear source after animation
        }, 300);
    }
    
    // Event listeners
    overlay.addEventListener('click', closeImage);
    closeBtn.addEventListener('click', closeImage);
    
    // Find all images in project pages and contribution sections
    const projectImages = document.querySelectorAll('.project-image img, .contribution-images img, .tool-gif, .feature-image img');
    
    projectImages.forEach(image => {
        image.classList.add('clickable-image');
        image.addEventListener('click', function(e) {
            e.stopPropagation();
            openImage(this.src);
        });
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImage();
        }
    });
});
