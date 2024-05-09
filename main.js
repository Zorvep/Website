SetCursorPosition = (mouse) => {
    const CursorGlow = document.getElementById("CursorGlow");
    const element = document.documentElement;
    const scrollTop = element.scrollTop;
    const scrollLeft = element.scrollLeft;

    CursorGlow.style.left = ((mouse.clientX + scrollLeft) - CursorGlow.offsetWidth/2) + "px";
    CursorGlow.style.top = ((mouse.clientY + scrollTop) - CursorGlow.offsetHeight/2) + "px";
    console.log(scrollTop);
};

addEventListener("mousemove", (SetCursorPosition));
addEventListener("scroll", (SetCursorPosition));
