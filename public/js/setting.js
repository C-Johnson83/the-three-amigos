const newSettingsHandler = async (event) => {
    event.preventDefault();
console.log("hello")
    const printTemperature = document.querySelector('#print-temperature').value.trim();
    const initialLayerTemperature = document.querySelector('#initial-layer-temperature').value.trim();
    const buildPlateTemperature = document.querySelector('#build-plate-temperature').value.trim();
    const retractionDistance = document.querySelector('#retraction-distance').value.trim();
    const retractionSpeed = document.querySelector('#retraction-speed').value.trim();
    const maxRetractionCount = document.querySelector('#max-retraction-count').value.trim();
    const printerId = document.querySelector('#printerId').value.trim();
    const filamentId = document.querySelector('#filamentId').value.trim();
    
    
        if (
            printTemperature &&
            initialLayerTemperature &&
            buildPlateTemperature &&
            retractionDistance &&
            retractionSpeed &&
            maxRetractionCount &&
            printerId &&
            filamentId
        ) {
            try {
                const response = await fetch('/api/settings', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        printerId,
                        filamentId,
                        printTemperature,
                        initialLayerTemperature,
                        buildPlateTemperature,
                        retractionDistance,
                        retractionSpeed,
                        maxRetractionCount
                    }),
                });
    
                if (response.ok) {
                    // Parse the JSON response
                    const responseData = await response.json();
    
                    // Redirect to a different page (e.g., profile page)
                    window.location.href = '/profile';
                } else {
                    // Handle non-ok responses
                    alert(`Error: ${response.statusText}`);
                }
            } catch (error) {
                // Handle fetch errors
                console.error('Error submitting form:', error);
                alert('An error occurred while submitting the form.');
            }
        }
    };
    
    document.querySelector('#addSettings').addEventListener('click', newSettingsHandler);
    