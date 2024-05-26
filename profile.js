function toggleDropdown() {
  var dropdown = document.getElementById("profile-dropdown");
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
    document.addEventListener("click", closeDropdownOutsideClick);
  } else {
    dropdown.style.display = "none";
    document.removeEventListener("click", closeDropdownOutsideClick); 
  }
}

function closeDropdownOutsideClick(event) {
  var dropdown = document.getElementById("profile-dropdown");
  if (!dropdown.contains(event.target) && event.target !== document.getElementById("profile")) {
    dropdown.style.display = "none";
    document.removeEventListener("click", closeDropdownOutsideClick); 
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var addSkillButton = document.getElementById("addSkill");
  var addEducationButton = document.getElementById("addEducation");

  addSkillButton.addEventListener("click", function () {
    handleAddElement("skill-form-container");
  });

  addEducationButton.addEventListener("click", function () {
    handleAddElement("edu-form-container");
  });

  function handleAddElement(containerId) {
    var container = document.getElementById(containerId);

    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "about-input";
    newInput.setAttribute("data-threshold", "50");

    var minusSymbol = document.createElement("img");
    minusSymbol.src = "icons8-minus-48.png";
    minusSymbol.className = "minus";
    minusSymbol.addEventListener("click", function () {
      container.removeChild(newInputContainer);
    });

    var newInputContainer = document.createElement("div");
    newInputContainer.className = "skill-input-container";
    newInputContainer.appendChild(newInput);
    newInputContainer.appendChild(minusSymbol);

    container.appendChild(newInputContainer);
  }
});






