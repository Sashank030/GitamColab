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

function getQueryParams() {
  const params = {};
  const queryString = window.location.search.substring(1);
  const regex = /([^&=]+)=([^&]*)/g;
  let m;
  while (m = regex.exec(queryString)) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }
  return params;
}


const params = getQueryParams();


document.getElementById('title').innerText = params.title || 'Title not available';
document.getElementById('role').innerText = params.role || 'Role not available';

const criteriaList = document.getElementById('criteria-list');
if (params.criteria1) {
  const li1 = document.createElement('li');
  li1.innerText = params.criteria1;
  criteriaList.appendChild(li1);
}
if (params.criteria2) {
  const li2 = document.createElement('li');
  li2.innerText = params.criteria2;
  criteriaList.appendChild(li2);
}

const createdBy = params.createdby || 'Created (Hidden)';
const time = params.time || 'Time not available';

document.getElementById('createdby').innerText = createdBy;
document.getElementById('time').innerText = time;

document.addEventListener('DOMContentLoaded', function() {
  const applyButton = document.getElementById('applyButton');
  applyButton.addEventListener('click', function(event) {
    const form = document.getElementById('applyForm');
    event.preventDefault();  
    this.textContent = 'Applied!';
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
  });
});

function bookmarkToggle(event) {
  var bookmark = event.target;
  if (bookmark.src.endsWith("icons8-bookmark-40.png")) {
    bookmark.src = "icons8-bookmark-40-filled.png";
  } else {
    bookmark.src = "icons8-bookmark-40.png";
  }
}

document.querySelectorAll('.bookmark-img').forEach(function(bookmark) {
  bookmark.addEventListener('click', bookmarkToggle);
});

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