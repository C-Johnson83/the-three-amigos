const newPrinterHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#printer-name').value.trim();
    const manufacturer = document.querySelector('#printer-manufacturer').value.trim();
    const model = document.querySelector('#printer-model').value.trim();
   console.log(name, manufacturer, model)
  
    if (name && manufacturer && model) {
      console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
      const response = await fetch('/add-printer', {
        
        method: 'POST',
        body: JSON.stringify({ name, manufacturer, model }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log(response);
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('#addPrinter').addEventListener('click', newPrinterHandler);