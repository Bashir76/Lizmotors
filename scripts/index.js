// Get all dropdown buttons
var dropdowns = document.querySelectorAll(".dropbtn");

// Add event listeners to each dropdown button
dropdowns.forEach(function(dropbtn) {
  dropbtn.addEventListener("click", function(event) {
    var dropdownContent = this.nextElementSibling;

    // Close all other dropdowns except the clicked one
    var openDropdowns = document.querySelectorAll(".dropdown-content");
    openDropdowns.forEach(function(content) {
      if (content !== dropdownContent && !content.contains(event.target)) {
        content.style.display = "none";
      }
    });

    // Toggle display of the clicked dropdown content
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }

    // Prevent event propagation to parent dropdowns
    event.stopPropagation();
  });

  // Close dropdown when double-clicked
  dropbtn.addEventListener("dblclick", function(event) {
    event.stopPropagation(); // Prevent double-click from bubbling to parent elements
    this.nextElementSibling.style.display = "none";
  });
});

// Close all dropdowns when clicking outside
document.addEventListener("click", function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(function(content) {
      content.style.display = "none";
    });
  }
});

// Toggle responsive class for mobile navigation
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
