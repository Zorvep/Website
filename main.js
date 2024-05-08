

OnMouseMove = (mouse) => {
    const CursorGlow = document.getElementById("CursorGlow");
    const element = document.documentElement;

    var scrollTop = element.scrollTop;
    var scrollHeight = element.scrollHeight;
    var scrollPercent = (scrollTop / scrollHeight);

    CursorGlow.style.left = ((mouse.clientX) - CursorGlow.offsetWidth/2) + "px";
    CursorGlow.style.top = ((mouse.clientY +scrollTop) - CursorGlow.offsetHeight/2) + "px";
    console.log(scrollTop);
};

addEventListener("mousemove", (OnMouseMove));
addEventListener("scroll", (OnMouseMove));
