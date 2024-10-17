function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({ "UserName" : username, "PassWord" : password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerHTML = 
    `<div style="
        background-color: #4e342e; /* Dark coffee background */
        color: #ffe0b2; /* Light cream text */
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        font-family: 'Georgia', serif;
        line-height: 1.6; /* Increase space between lines for readability */
        width: 90%;
        margin: 20px auto;
    ">
        <strong style="color: #ffcc80;">Status:</strong> ${data.status} <br>
        <strong style="color: #ffcc80;">Message:</strong> ${data.message} <br>
        <strong style="color: #ffcc80;">Type:</strong> ${data.type} <br>
        <strong style="color: #ffcc80;">UserName:</strong> ${data.UserName} <br>
        <strong style="color: #ffcc80;">TU Status:</strong> ${data.tu_status} <br>
        <strong style="color: #ffcc80;">Status ID:</strong> ${data.statusid} <br>
        <strong style="color: #ffcc80;">Display Name (TH):</strong> ${data.displayname_th} <br>
        <strong style="color: #ffcc80;">Display Name (EN):</strong> ${data.displayname_en} <br>
        <strong style="color: #ffcc80;">Email:</strong> ${data.email} <br>
        <strong style="color: #ffcc80;">Department:</strong> ${data.department} <br>
        <strong style="color: #ffcc80;">Faculty:</strong> ${data.faculty}
    </div>`;


    })
    .catch(error => console.error('Error:', error));
}



function call_REST_API_Hello() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = (
        'http://localhost:8080/hello?' +
        new URLSearchParams({ myName: username, lastName: password}).toString()
      );
    
    fetch(url)
    .then(response => response.text())
    .then(text => {
        document.getElementById('message').innerText = text;
    })
    .catch(error => console.error('Error:', error));
}
