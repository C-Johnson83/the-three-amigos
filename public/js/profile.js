const addPrinter = () => {
  document.location.replace('/api/add-printer');
};

const addFilament = () => {
  document.location.replace('/api/add-filament')
}

const settings = () => {
  document.location.replace('/api/settings')
}

document.querySelector('#btnAddPrinter').addEventListener('click', addPrinter);
document.querySelector('#btnAddFilament').addEventListener('click', addFilament);
document.querySelector('#btnSettings').addEventListener('click', settings);

