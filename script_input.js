
function login() {
    let emailInput = document.getElementById('emailInput').value;
    let passwordInput = document.getElementById('passwordInput').value;

    let email = 'admin@gmail.com';
    let password = '12345';

    if (emailInput === email && passwordInput === password) {
        let modal = new bootstrap.Modal(document.getElementById('myModal'));
        modal.show();
        document.getElementById('warning').style.display = 'none';
    } else {
        document.getElementById('warning').style.display = 'block';
    }
}