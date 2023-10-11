document.addEventListener('DOMContentLoaded', (event) => {
    if (event.target.readyState === "complete") {
        init();
    }
});

function init() {
    const addPostForm = document.querySelector('form[action="/posts"]');
    
    if (addPostForm) {
        addPostForm.addEventListener('submit', handlePostSubmit);
    }
}

async function handlePostSubmit(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post.');
        }
    } else {
        alert('Please fill out both the title and content fields before submitting.');
    }
}
