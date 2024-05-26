function validateemail() {
  var email= document.getElementById("username").value;
  var pass=document.getElementById("password").value;
  var pass2=document.getElementById("cpassword").value;
  var passRegex = /^(?=.*[A-Z]).{8,}$/;
  var emailRegex =  /^[a-zA-Z0-9._%+-]+@(gitam\.edu|gitam\.in)$/;
  if (!emailRegex.test(email)) {
      alert("Your Username Must be a Valid Gitam Email ID");}
  else if(pass==""  || pass2==""){
      alert("Please enter both your passwords");} 
  else if(!passRegex.test(pass)){
        alert("Password must be greater than 8 characters and contain at least one capital letter.");}
  else if(pass!==pass2){
      alert("Passwords Do Not Match");}
  else {
      window.location.href ="profile.html";
  }
}