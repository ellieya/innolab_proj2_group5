var i, content, button
    content = document.getElementsByClassName("content");
    button = document.getElementsByClassName("button");

    // Get all content & hide it
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

function openTab (evt, tabname) {
    // Get all content & hide it
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    // Get all tab links & get rid of "active" class
    for (i = 0; i < button.length; i++) {
        button[i].className = button[i].className.replace(" active", "");
    }

    // Make current ID appear
    document.getElementById(tabname).style.display="block";

    // Add active class
    evt.currentTarget.className += " active";
    }

openTab(event, 'money');