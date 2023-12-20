const newFilamentHandler = async (event) => {
    event.preventDefault();
  
    const materialId = document.querySelector('#materialId').value.trim();
    const manufacturer = document.querySelector('#manufacturer').value.trim();
    const color = document.querySelector('#color').value.trim();
    const diameter = document.querySelector('#diameter').value.trim();

  
    if (materialId && manufacturer && color && diameter) {

        console.log("hi");
      const response = await fetch('/api/add-filament', {


        
        method: 'POST',
        body: JSON.stringify({ materialId, manufacturer,color,diameter }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('#addFilament').addEventListener('click', newFilamentHandler);