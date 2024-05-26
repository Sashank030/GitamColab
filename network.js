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

function openApplyPage(title, role, criteria1, criteria2) {
  const queryString = `?title=${encodeURIComponent(title)}&role=${encodeURIComponent(role)}&criteria1=${encodeURIComponent(criteria1)}&criteria2=${encodeURIComponent(criteria2)}`;
  window.location.href = `apply.html${queryString}`;
}

jQuery("#search_submit").on("click", function () {
  findString('');
  return false;
});

var TRange=null;

function searchText(str) {
  str = document.getElementById('search_text').value;
  if (parseInt(navigator.appVersion)<4) return;
  var strFound;
  if (window.find) {
      var original_content = window;
      strFound=original_content.find(str);
      if (!strFound) {
          strFound=original_content.find(str,0,1);
          while (original_content.find(str,0,1)) continue;
      }
  }
  else if (navigator.appName.indexOf("Microsoft")!=-1) {

      if (TRange!=null) {
          TRange.collapse(false);
          strFound=TRange.findText(str);
          if (strFound) TRange.select();
      }
      if (TRange==null || strFound==0) {
          TRange=self.document.body.createTextRange();
          strFound=TRange.findText(str);
          if (strFound) TRange.select();
      }
  }
  else if (navigator.appName=="Opera") {
      alert ("Opera browsers not supported, sorry...")
      return;
  }
  if (!strFound) alert ("String '"+str+"' not found!")
  return;
}


