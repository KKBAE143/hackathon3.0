document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let location = document.getElementById('location').value;
    let insuranceProvider = document.getElementById('insurance-provider').value;

    fetchHospitals(location, insuranceProvider);
});

function fetchHospitals(location, insuranceProvider) {
    let url = 'https://health-insurance-provider-api.example.com/hospitals';

    let requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            location: location,
            insuranceProvider: insuranceProvider
        })
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => displayHospitals(data))
        .catch(error => console.log('Error:', error));
}

function displayHospitals(hospitals) {
    let results = document.getElementById('results');

    if (hospitals.length > 0) {
        let html = '<ul>';

        hospitals.forEach(hospital => {
            html += `<li>${hospital.name}</li>`;
        });

        html += '</ul>';

        results.innerHTML = html;
    } else {
        results.innerHTML = '<p>No hospitals found.</p>';
    }
}