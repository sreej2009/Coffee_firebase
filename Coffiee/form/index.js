const username = document.querySelector("#username").value;
const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;
const cpassword = document.querySelector("#cpassword").value;
const form = document.querySelector("#form").value;
const submit = document.querySelector(".submit-btn").value;
form.addEventListener("submit", (e) => {
  if (validateInputs()) {
    e.preventDefault();
  }
});
function validateInputs() {
  const usernameVal = username;
  const emailVal = email;
  const passwordVal = password;
  const cpasswordVal = cpassword;
  let success = true;
  if (usernameVal === "") {
    success = false;
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }
  if (emailVal === "") {
    success = false;
    setError(email, "Email is required");
  } else if (!validateEmail(emailVal)) {
    success = false;
    setError(email, "Please enter a valid email");
  } else {
    setSuccess(email);
  }
  if (passwordVal === "") {
    success = false;
    setError(password, "Password is required");
  } else if (passwordVal.length < 8) {
    success = false;
    setError(password, "Password must be at least 8 characters");
  } else {
    setSuccess(password);
  }
  if (cpasswordVal === "") {
    success = false;
    setError(cpassword, "Confirm Password is required");
  } else if (cpasswordVal !== passwordVal) {
    success = false;
    setError(cpassword, "Passwords don't match");
  } else {
    setSuccess(cpassword);
  }
  return success;
}
function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}
function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};
