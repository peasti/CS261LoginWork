function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key' : 'TU01b3acdc84ce14bfebd27d683c9d537d14e26e0e51a17955e55a9c0d192ba07921e49e4b99956ecd60216f332c63a838'
        },
        body: JSON.stringify({ "UserName" : username, "PassWord" : password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerHTML = `
        <div style="padding: 10px; background-color: rgba(255, 255, 255, 0.9); border-radius: 10px; color: #333; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <strong style="color: #333;">Status:</strong> ${data.status} <br>
            <strong style="color: #333;">Message:</strong> ${data.message} <br>
            <strong style="color: #333;">Type:</strong> ${data.type} <br>
            <strong style="color: #333;">UserName:</strong> ${data.UserName} <br>
            <strong style="color: #333;">TU Status:</strong> ${data.tu_status} <br>
            <strong style="color: #333;">Status ID:</strong> ${data.statusid} <br>
            <strong style="color: #333;">Display Name (TH):</strong> ${data.displayname_th} <br>
            <strong style="color: #333;">Display Name (EN):</strong> ${data.displayname_en} <br>
            <strong style="color: #333;">Email:</strong> ${data.email} <br>
            <strong style="color: #333;">Department:</strong> ${data.department} <br>
            <strong style="color: #333;">Faculty:</strong> ${data.faculty}
        </div>
    `;
    


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
