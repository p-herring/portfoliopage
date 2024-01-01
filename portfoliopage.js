document.getElementById("clickme").addEventListener("click", function() {
        alert("Oops, you clicked wrong. Email is the best.");
        var hiddenElement = document.getElementById("hiddenElement");
        hiddenElement.style.display = "block"; // Change the display property to show the element
    });