document.querySelector('.login-form form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'You are now logged in!') {
            location.href = '/';  // redirect to the homepage or dashboard, as per your app's design
        } else {
            alert('Error logging in. Please check your credentials and try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});