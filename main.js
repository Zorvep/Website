

OnMouseMove = (mouse) => {
    const CursorGlow = document.getElementById("CursorGlow");

    CursorGlow.style.left = (mouse.clientX - CursorGlow.offsetWidth/2) + "px";
    CursorGlow.style.top = (mouse.clientY - CursorGlow.offsetHeight/2) + "px";
    console.log(`width: ${CursorGlow.width} px`);
};

addEventListener("mousemove", (OnMouseMove));
