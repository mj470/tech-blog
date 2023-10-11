document.querySelector('.account-sign-in-form form').addEventListener('submit', event => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && password) {
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(response => {
            if (response.ok) {
                console.log('Signup successful');
                document.location.replace('/login');
            } else {
                alert(response.statusText + '. Please try again.');
            }
        })
        .catch(error => {
            console.error('There was an error signing up: ', error);
            alert('Failed to sign up. Please try again later.');
        });
    } else {
        alert('Both username and password fields must be filled out.');
    }
});
