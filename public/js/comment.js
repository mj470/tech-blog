document.addEventListener('DOMContentLoaded', (event) => {
    if (event.target.readyState === "complete") {
        init();
    }
});

function init() {
    const commentForm = document.querySelector('#comment-form');
    const deleteButtons = document.querySelectorAll('.delete-comment-btn');

    if (commentForm) {
        commentForm.addEventListener('submit', handleCommentSubmit);
    }

    if (deleteButtons && deleteButtons.length > 0) {
        deleteButtons.forEach(btn => {
            btn.addEventListener('click', handleDeleteComment);
        });
    }
}

async function handleCommentSubmit(event) {
    event.preventDefault();

    const commentText = document.querySelector('#comment-text').value.trim();
    const postId = document.querySelector('#post-id').value;

    if (commentText) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_text: commentText, post_id: postId }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create comment.');
        }
    }
}

async function handleDeleteComment(event) {
    const commentId = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comments/${commentId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Failed to delete comment.');
    }
}