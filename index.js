let signingData = [];

function signIn(e) {
  e.preventDefault()
  let userEmail = document.getElementById("userEmail").value
  let passWord = document.getElementById("Pword").value
  let users = localStorage.getItem("usersData")
  if (users) {
    signingData = JSON.parse(users)
  }
  
  for (let i = 0; i < signingData.length; i++) {

    if (userEmail == signingData[i].userEmail && passWord == signingData[i].passWord) {

      document.body.innerHTML = "<div id='icon'><i class='fas fa-check-circle'></i></div>"
      return
    } else {
      alert("wrong password or E=mail")
      return
    }
  }
  
}
function signUp(e) {
  e.preventDefault()
  let userEmail = document.getElementById("newUserEmail").value
  let passWord = document.getElementById("newUserPword").value
  let pwConfirmation = document.getElementById("confirmation").value

  let users = localStorage.getItem("usersData")
  if (users) {
    signingData = JSON.parse(users)
  }

  for (let i = 0; i < signingData.length; i++) {
    if (userEmail == signingData[i].userEmail) {
      alert("User elready exist!")
      return
    }
  }


  if (userEmail && passWord && (pwConfirmation === passWord)) {

    signingData.push({ userEmail, passWord })
    localStorage.setItem("usersData", JSON.stringify(signingData))
    document.body.innerHTML = `<h1>Hallo ${userEmail}</h1>`;

  } else {
    alert("Wrong username or password")

  }
}



