const newPrinterHandler = async (event) => {
    event.preventDefault();
  
    const p_name = document.querySelector('#printer-name').value.trim();
    const manufacturer = document.querySelector('#printer-manufacturer').value.trim();
    const model = document.querySelector('#printer-model').value.trim();
  
    if (p_name && manufacturer && model) {
      const response = await fetch('/api/add-printer', {
        
        method: 'POST',
        body: JSON.stringify({ p_name, manufacturer, model }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('#addPrinter').addEventListener('click', newPrinterHandler);