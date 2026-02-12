let user = prompt("who?","");
if (user == "Admin") { 
let password = prompt("password?","");
if (password == "TheMaster") {
  alert("Welcome!");
} else if(password!="TheMaster"){
  alert("Wrong password");
} else{
  alert("Canceled");
}} else if(user!="Admin"){
  alert("I don't know you");
} else{
  alert("Canceled");
}