

const newSettingsHandler = async (event) => {
    event.preventDefault();
console.log("hello")
    var printTemperature = document.querySelector('#print-temperature').value.trim();
    var initialLayerTemperature = document.querySelector('#initial-layer-temperature').value.trim();
    var buildPlateTemperature = document.querySelector('#build-plate-temperature').value.trim();
    var retractionDistance = document.querySelector('#retraction-distance').value.trim();
    var retractionSpeed = document.querySelector('#retraction-speed').value.trim();
    var maxRetractionCount = document.querySelector('#max-retraction-count').value.trim();
    var printerId = document.querySelector('#printerId').value.trim();
    var filamentId = document.querySelector('#filamentId').value.trim();
    console.log(buildPlateTemperature)

        if (
            isInt(printTemperature) &&
            isInt(initialLayerTemperature) &&
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
                        printerId: printerId,
                        filamentId: filamentId,
                        printTemperature: printTemperature,
                        initialLayerTemperature: initialLayerTemperature,
                        buildPlateTemperature: buildPlateTemperature,
                        retractionDistance: retractionDistance,
                        retractionSpeed: retractionSpeed,
                        maxRetractionCount: maxRetractionCount
                    }),
                });
    
                if (response.ok) {
                    // Parse the JSON response
                    //const responseData = await response.json();
    
                    // Redirect to a different page (e.g., profile page)
                    //window.location.href = '/profile';
                    document.location.replace('/api/settings')
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
    