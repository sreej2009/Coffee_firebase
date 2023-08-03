// function validateForm() {
//   var username = document.forms["myForm"]["username"].value;
//   var email = document.forms["myForm"]["email"].value;
//   var password = document.forms["myForm"]["password"].value;
//   var confirmPassword = document.forms["myForm"]["confirmPassword"].value;

//   // Check if inputs are empty
//   if (username == "") {
//     alert("Username must be filled out");
//     return false;
//   }
//   if (email == "") {
//     alert("Email must be filled out");
//     return false;
//   }

//   if (password == "") {
//     alert("Password must be filled out");
//     return false;
//   }

//   if (confirmPassword == "") {
//     alert("Confirm Password must be filled out");
//     return false;
//   }

//   // Validate email format using regular expression
//   var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (!emailRegex.test(email)) {
//     alert("Invalid email format");
//     return false;
//   }

//   // Check if password and confirm password match
//   if (password !== confirmPassword) {
//     alert("Passwords do not match");
//     return false;
//   }

//   // Check if password meets complexity requirements
//   // Example: At least 8 characters with at least one uppercase letter, one lowercase letter, and one number
//   var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//   if (!passwordRegex.test(password)) {
//     alert(
//       "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
//     );
//     return false;
//   }
// }
