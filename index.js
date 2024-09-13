document.getElementById("gridBtn").addEventListener("click", () => {
    const mainGrid = document.getElementById("mainGrid");
    const picGrid = document.querySelectorAll("#picGrid");
    const content = document.getElementById("content");

    // Check the current text of the content element
    if (content.innerHTML === "Margin Grid") {
        // Change text and add classes if the current text is "Margin Grid"
        content.innerHTML = "Remove Margin Grid";
        mainGrid.classList.add("gap-3");
        
        
        picGrid.forEach(img => {
            img.classList.add("mb-3");
        });



    } else {
        // Revert text and remove classes if the current text is not "Margin Grid"
        content.innerHTML = "Margin Grid";
        mainGrid.classList.remove("gap-3");
        
        
        picGrid.forEach(img => {
            img.classList.remove("mb-3");
        });
    }
});


document.getElementById("toggle").addEventListener("click", () => {
    const toggle = document.getElementById("toggle");
    const nav  = document.getElementById("navigation");

    if (toggle.checked) {
        nav.classList.remove("left-[-100%]");
        nav.classList.add("left-0");
    } else {
        nav.classList.remove("left-0");
        nav.classList.add("left-[-100%]");
    }
});