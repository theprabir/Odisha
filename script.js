    const images = document.querySelectorAll('.image-slider img');
    let currentImageIndex = 0;
    const imageInterval = setInterval(changeImage, 3000); // Change image every 5 seconds

    function changeImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }
