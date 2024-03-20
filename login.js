var login_text = document.getElementById('login_text')
var element_hide = document.querySelector('.hide');

window_login = function() {
document.getElementById("hide").style.display = "block";
document.getElementById("window").style.display = "flex";
}

function login(event) {
  var user = document.getElementById('user').value;
  var pass = document.getElementById('pass').value;
  if (user === 'Denis' && pass === '123')  {
  document.getElementById("hide").style.display = "none";
  document.getElementById("window").style.display = "none";
  login_text.textContent = 'Denis';
  document.getElementById("hide").id = 'hide_2';
  document.getElementById("window").id = 'window_2';
  document.getElementsByClassName('button_login')[0].style= " margin-left: 4%; background: red; text-decoration: none; border: 0;color:white";
  }
  
  
  if (user === 'f0ga' && pass === '312A')  {
  document.getElementById("hide").style.display = "none";
  document.getElementById("window").style.display = "none";
  login_text.textContent = 'Илья';
  document.getElementById("hide").id = 'hide_2';
  document.getElementById("window").id = 'window_2';
  document.getElementsByClassName('button_login')[0].style= " margin-left: 4%; background: red; text-decoration: none; border: 0;color:white";
  }
  event.preventDefault();
}