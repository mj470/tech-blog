ocument.getElementById('delete-post').addEventListener('click', () => {
    const postId = document.querySelector('input[name="post_id"]').value;

    if (confirm('Are you sure you want to delete this post?')) {
        fetch(`/api/posts/${postId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to delete post');
            }
        })
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