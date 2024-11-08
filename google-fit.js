function getSteps() {
    // Retrieve the access token from localStorage
    const accessToken = localStorage.getItem('google_access_token');
    if (!accessToken) {
        alert('No access token found. Please log in first.');
        window.location.href = 'index.html';
        return;
    }

    console.log("Access Token:", accessToken); // For debugging

    // Get the start of today in milliseconds
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

    // Set up the API request to Google Fit
    fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "aggregateBy": [{
                "dataTypeName": "com.google.step_count.delta",
                "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
            }],
            "bucketByTime": { "durationMillis": 86400000 },
            "startTimeMillis": startOfToday, // Start of today at 00:00:00
            "endTimeMillis": now.getTime() // Current time
        })
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(JSON.stringify(err));
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Raw response:', data);

            let totalSteps = 0;
            if (data.bucket && data.bucket.length > 0) {
                data.bucket.forEach(bucket => {
                    if (bucket.dataset && bucket.dataset[0].point) {
                        bucket.dataset[0].point.forEach(point => {
                            if (point.value && point.value[0]) {
                                totalSteps += point.value[0].intVal || 0;
                            }
                        });
                    }
                });
            }

            document.getElementById('stepsValue').textContent = totalSteps;
            console.log('Steps:', totalSteps);
        })
        .catch(error => {
            console.error('Error fetching step count:', error);
            document.getElementById('stepsValue').textContent = 'Error';
            alert('Failed to fetch steps data: ' + error.message);
        });
}

// Call this function when the page loads
window.onload = getSteps;
