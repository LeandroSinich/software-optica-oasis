document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');
    const foreground = document.getElementById('foreground');
    const circle = document.getElementById('circle');

    function moveReveal(e) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        foreground.style.clipPath = `circle(100px at ${x}px ${y}px)`;
        circle.style.left = `${x - 102}px`; // Ajusta la posición del borde
        circle.style.top = `${y - 102}px`;  // Ajusta la posición del borde
    }

    container.addEventListener('mousemove', moveReveal);
});

