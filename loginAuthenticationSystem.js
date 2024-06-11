let signUpBtn=document.querySelector('.signupbtn');
let signInBtn=document.querySelector('.signinbtn');
let nameField=document.querySelector('.namefield');
let title=document.querySelector('.title');
let underline=document.querySelector('.underline');
let text=document.querySelector('.text');
signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='0';
    title.innerHTML='Sign In';
    text.innerHTML='Lost Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform='translateX(35px)';
});
signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='60px';
    title.innerHTML='Sign Up';
    text.innerHTML='Password Suggestions';
    signInBtn.classList.add('disable');
    signUpBtn.classList.remove('disable');
    underline.style.transform='translateX(0)';
});
document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.querySelector('.signupbtn');
    const signinBtn = document.querySelector('.signinbtn');

    // Simulated database of users
    const users = [
        { name: 'Bijendar kumar yadav', email: 'bijendra12@gmail.com', password: '12345678' }
    ];

    // Function to display an alert message
    const showAlert = (message) => {
        alert(message);
    };

    // Function to handle Sign Up
    signupBtn.addEventListener('click', () => {
        const name = document.querySelector('input[placeholder="Name"]').value;
        const email = document.querySelector('input[placeholder="Email"]').value;
        const password = document.querySelector('input[placeholder="Password"]').value;

        if (!name || !email || !password) {
            showAlert('All fields are required!');
            return;
        }

        // Check if the email already exists
        const userExists = users.some(user => user.email === email);
        if (userExists) {
            showAlert('Email already exists!');
            return;
        }

        // Add the new user to the simulated database
        users.push({ name, email, password });
        showAlert('Sign Up successful!');
    });

    // Function to handle Sign In
    signinBtn.addEventListener('click', () => {
        const email = document.querySelector('input[placeholder="Email"]').value;
        const password = document.querySelector('input[placeholder="Password"]').value;

        if (!email || !password) {
            showAlert('Email and Password are required!');
            return;
        }

        // Check if the email and password match
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            showAlert(`Welcome back, ${user.name}!`);
        } else {
            showAlert('Invalid Email or Password!');
        }
    });
});

