// public/js/profile.js
const addPrinterForm = document.querySelector('form[action="/api/profiles/add-printer"]');
const addFilamentForm = document.querySelector('form[action="/api/profiles/add-filament"]');
const addSettingsForm = document.querySelector('form[action="/api/profiles/add-settings"]');

// Handle submission of the add printer form
addPrinterForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(addPrinterForm);
  const response = await fetch('/api/profiles/add-printer', {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    // Optionally, update the UI or perform other actions
    console.log('Printer added successfully');
  } else {
    console.error('Failed to add printer');
  }
});

// Handle submission of the add filament form
addFilamentForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(addFilamentForm);
  const response = await fetch('/api/profiles/add-filament', {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    // Optionally, update the UI or perform other actions
    console.log('Filament added successfully');
  } else {
    console.error('Failed to add filament');
  }
});

// Handle submission of the add settings form
addSettingsForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(addSettingsForm);
  const response = await fetch('/api/profiles/add-settings', {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    // Optionally, update the UI or perform other actions
    console.log('Settings added successfully');
  } else {
    console.error('Failed to add settings');
  }
});
