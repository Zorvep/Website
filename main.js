window.onload = () => {
    const cursor = document.getElementById("Cursor");
    let clientX = 0;
    let clientY = 0;
    let ticking = false;

    const updateCursor = () => {
        cursor.style.display = 'block';
        cursor.style.top = clientY + window.scrollY + "px";

        cursor.animate({
            left: clientX + window.scrollX + "px",
            top: clientY + window.scrollY + "px"

        }, {duration: 300, fill: "forwards"});
    };

    document.addEventListener("mousemove", (e) => {
        clientX = e.clientX;
        clientY = e.clientY;
        updateCursor();
    });

    document.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateCursor();
                ticking = false;
            });
            ticking = true;
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (!e.relatedTarget) {
            cursor.style.display = 'none';
        }
    });

    document.addEventListener('mouseover', (e) => {
        if (!e.relatedTarget) {
            cursor.style.display = 'block';
        }
    });
};
