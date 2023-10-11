document.addEventListener('DOMContentLoaded', (event) => {
    const logoutButton = document.getElementById('logout');

    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();

        fetch('/api/users/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => {
            if (response.ok) {
                document.location.replace('/');
            } else {
                alert(response.statusText);
            }
        });
    });
});