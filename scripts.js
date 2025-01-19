document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll(".projects-page .row");

    rows.forEach(row => {
        const images = Array.from(row.querySelectorAll(".image-gallery img"));
        if (images.length > 1) {
            let currentIndex = 0;

            row.addEventListener("click", () => {
                images[currentIndex].style.display = "none";
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].style.display = "block";
            });

            // Only display the first image initially
            images.forEach((img, index) => {
                img.style.display = index === 0 ? "block" : "none";
            });
        }
    });
});


