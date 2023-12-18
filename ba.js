document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let location = document.getElementById('location').value;
    let bloodGroup = document.getElementById('blood-group').value;

    fetchBloodAvailability(location, bloodGroup);
});

function fetchBloodAvailability(location, bloodGroup) {
    let url = 'https://blood-availability-api.example.com/hospitals';

    let requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            location: location,
            bloodGroup: bloodGroup
        })
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => displayBloodAvailability(data))
        .catch(error => console.log('Error:', error));
}

function displayBloodAvailability(hospitals) {
    let results = document.getElementById('results');

    if (hospitals.length > 0) {
        let html = '<ul>';

        hospitals.forEach(hospital => {
            html += `<li>${hospital.name} - Available units: ${hospital.bloodAvailability}</li>`;
        });

        html += '</ul>';

        results.innerHTML = html;
    } else {
        results.innerHTML = '<p>No hospitals found with available blood.</p>';
    }
}