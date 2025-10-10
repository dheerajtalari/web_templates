const signinBtn = document.getElementById("signin-btn");
const signupBtn = document.getElementById("signup-btn");
const signinForm = document.getElementById("signin-form");
const signupForm = document.getElementById("signup-form");

signinBtn.addEventListener("click", () => {
    console.log("Sign In button clicked!");
    signinForm.classList.add("active");
    signupForm.classList.remove("active");
});

signupBtn.addEventListener("click", () => {
    console.log("Sign Up button is clicked!")
    signupForm.classList.add("active");
    signinForm.classList.remove("active");
});
