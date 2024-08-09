let submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let date = document.getElementById('date').value;
    let hobby = document.getElementById('hobby').value;
    let male = document.getElementById('male').value;
    let female = document.getElementById('female').value;


    if(!name || !password || !confirmPassword || !date || !hobby || (!male && !female)){
        alert("Please fill in all the required fields");
        return false;
    }
    else if(password.length < 8){
        alert("Password must be at least 8 characters");
    }
    else if(password !== confirmPassword){
        alert("Passwords do not match");
    }
});