const newFormHandler = async (event) => {
    event.preventDefault();
  console.log(event)
    const name = document.querySelector('#profile-name').value.trim();
    const email = document.querySelector('#profile-funding').value.trim();
    const password = document.querySelector('#profile-desc').value.trim();
  
    // if (name && manufacturer && description) {
      if (name){
      const response = await fetch(`/api/profiles`, {
        method: 'POST',
        body: JSON.stringify({ name, email, password}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create profile');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/profiles/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete profile');
      }
    }
  };
  
  document
    .querySelector('.new-profile-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.profile-list')
    .addEventListener('click', delButtonHandler);
  