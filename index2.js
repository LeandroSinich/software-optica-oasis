document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');
    const foreground = document.getElementById('foreground');
    const lens = document.getElementById('lens');

    function moveReveal(e) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        foreground.style.clipPath = `circle(200px at ${x}px ${y}px)`;
        lens.style.left = `${x - 200}px`;
        lens.style.top = `${y - 200}px`;
    }

    container.addEventListener('mousemove', moveReveal);
});
