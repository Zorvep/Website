function ToggleSideBar() {
    var element = document.getElementById("sidebar")
    var display = element.style.display
    console.log(element)

    if (display !== "none") {
        element.style.display = "none"
    }
    else {
        element.style.display = "inline"
    }
}