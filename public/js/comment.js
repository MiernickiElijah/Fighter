const commentHandler = async (event) => {
  event.preventDefault();
  
  const description = document.querySelector('#comment-desc').value;

  if (description) {
    const path = window.location.pathname;
    const response = await fetch(`/api/comments/${path.substring(path.lastIndexOf("/") + 1)}`, {
      method: 'POST',
      body: JSON.stringify({ description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      console.log(description);
      alert('Failed to post comment');
    }
  }
};

document
  .querySelector('.comment')
  .addEventListener('click', commentHandler);
