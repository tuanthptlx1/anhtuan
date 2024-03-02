function loginUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        document.getElementById('loggedInContent').style.display = 'block';
        document.getElementById('loggedInUser').innerText = username;

        document.getElementById('loginForm').style.display = 'none';

        return false;
    } else {
        alert('Đăng nhập không thành công. Vui lòng kiểm tra tên người dùng và mật khẩu.');
        return false;
    }
}

function logoutUser() {
    document.getElementById('loggedInContent').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
