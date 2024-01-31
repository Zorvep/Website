document.addEventListener('DOMContentLoaded', function() {
    function autoResize(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }

    var textareas = document.getElementsByClassName('hackerbox');
    for (var i = 0; i < textareas.length; i++) {
        autoResize(textareas[i]);
    }
});