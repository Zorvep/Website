function ToggleSideBar() {
    let sidebar = document.getElementById("sidebar")

    if (sidebar.style.display !== "none") {
        sidebar.style.display = "none"
    }

    else {
        sidebar.style.display = "inline"
    }
}