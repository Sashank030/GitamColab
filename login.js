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

function validateemail() {
  var email= document.getElementById("username").value;
  var pass=document.getElementById("password").value;
  var passRegex = /^(?=.*[A-Z]).{8,}$/;
  var emailRegex =  /^[a-zA-Z0-9._%+-]+@(gitam\.edu|gitam\.in)$/;
  if (!emailRegex.test(email)) {
      alert("Your Username Must be a Valid Gitam Email ID");} 
  else if(pass==""){
    alert("Please Enter Your Password");}
  else if(!passRegex.test(pass)){
      alert("Password must be greater than 8 characters and contain at least one capital letter.");}
  else {
      window.location.href ="network.html";
  }
}
