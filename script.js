const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HELLO</title>
    <link rel="stylesheet" href="style.css">
    <script>
   function loginUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '1' && password === '1') {
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


function logoutUser() {
    document.getElementById('loggedInContent').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
    </script>
    <style>
    body {
        background-color:antiquewhite;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
    
    header {
        color: black;
        text-align: center;
        padding: 1em;
    }
    
    section {
        max-width: 400px;
        margin: 20px auto;
        padding: 20px;
        border: 3px solid #ddd;
    }
    
    form {
        display: flex;
        flex-direction: column;
    }
    
    label {
        margin-bottom: 5px;
    }
    
    input,button{
        border-radius: 40px;
        margin-bottom: 10px;
        padding: 10px;
    }
    button {
    border: none;
    padding: 0.8em 2.5em;
    outline: none;
    color: white;
    font-style: 1.2em;
    position: relative;
    z-index: 1;
    cursor: pointer;
    background: none;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
  }
  
  button:before,
  button:after {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 10em;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    width: 105%;
    height: 105%;
    content: "";
    z-index: -2;
    background-size: 400% 400%;
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
  }
  
  button:before {
    -webkit-filter: blur(7px);
    filter: blur(7px);
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    -webkit-animation: pulse 10s infinite ease;
    animation: pulse 10s infinite ease;
  }
  
  button:after {
    -webkit-filter: blur(0.3px);
    filter: blur(0.3px);
  }
  
  button:hover:before {
    width: 50%;
    height: 50%;
  }
    #loggedInContent {
        text-align: center;
    }
    
    </style>
</head>
<body>
<header>
<h1>NGUYỄN ANH TUẤN-MSV:22810310003<br></h1>
</header>
<section>
<div id="loginForm">
    <h2>Đăng Nhập</h2>
    <form onsubmit="return loginUser()">
        <label for="username">Tên người dùng:</label>
        <input type="text" id="username" name="username" required>

        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" name="password" required>

       <center><button type="submit" style="width:50%; margin-top: 10px; " >Đăng Nhập</button></center>
    </form>
    <div style="color: red;">
    TK :1 MK:1
    </div>
</div>

<div id="loggedInContent" style="display: none;">
    <p>Xin chào, <span id="loggedInUser"></span>!</p>
    <h2>
        Họ tên :NGUYỄN ANH TUẤN<br>
        Mã SV 22810310003<br>
        Lớp D17CNPM1<br>
    </h2>
    <button onclick="logoutUser()" >Đăng Xuất</button>
</div>
</section>
<script src="script.js"></script>
    
</body>
</html>
`
