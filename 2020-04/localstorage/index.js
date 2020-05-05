

function createEmailPw (){
    localStorage.setItem('name1', document.getElementById('email').value);
    document.getElementById("email").innerText = localStorage.getItem('name1');

    localStorage.setItem('name2', document.getElementById('password').value);
    document.getElementById("password").innerText = localStorage.getItem('name2');
}
document.getElementById("email").innerText = localStorage.getItem('name1');

document.getElementById("password").innerText = localStorage.getItem('name2');