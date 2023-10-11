document.getElementById('edit-post-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const id = event.target.querySelector('input[name="post_id"]').value;
    const title = event.target.querySelector('input[name="title"]').value;
    const content = event.target.querySelector('textarea[name="content"]').value;

    fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: title,
            content: content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        } else {
            alert('Error updating post.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('delete-post').addEventListener('click', () => {
    const postId = document.querySelector('input[name="post_id"]').value;

    if (confirm('Are you sure you want to delete this post?')) {
        fetch(`/api/posts/${postId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                location.href = '/dashboard'; // Redirect to dashboard after delete
            } else {
                alert('Error deleting post.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});