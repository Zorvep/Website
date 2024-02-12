function ToggleSideBar(triggeringElement) {
    let element = document.getElementById("sidebar")
    let elements = document.getElementById("sidebarbutton")
    let display = element.style.display

    triggeringElement.style.display = "none"

    for (let i = 0; elements.length; i++) {
        if (elements[i] !== triggeringElement) {
            elements[i].style.display = "inline"
        }
    }

    if (display !== "none") {
        element.style.display = "none"
    }
    else {
        element.style.display = "inline"
    }
}