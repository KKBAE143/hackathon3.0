const search = document.getElementById('search');
const hospitalList = document.querySelector('.hospital-list');

const hospitals = [
    { name: 'Apollo Hospital', location: 'Jubliee Hills', ratings: 4.4 },
    { name: 'Yashoda Hospitals', location: 'Somajiguda', ratings: 4.8 },
    { name: 'Continental hospital', location: 'Nanakaramguda', ratings: 4.6 },
    { name: 'KIMS hospital', location: 'Secunderabad', ratings: 4.5 },
    { name: 'Medicover Hospital', location: 'Cyber Towers', ratings: 4.6 },
    { name: 'Aster Prime Hospital', location: 'Maitrivanam', ratings: 4.6 },
    { name: 'Olive Hospital', location: 'Mehdipatnam', ratings: 4.4 },
    { name: 'CARE Hospital', location: 'Banjara Hills', ratings: 4.5 },
    { name: 'Virinchi Hospital', location: 'Virinchi Circle', ratings: 4.3 },
];

function renderHospitals(hospitals) {
    hospitalList.innerHTML = '';

    hospitals.forEach(hospital => {
        const card = document.createElement('div');
        card.classList.add('hospital-card');
        card.innerHTML = `
            <div>
                <h2>${hospital.name}</h2>
                <p>${hospital.location}</p>
            </div>
            <div class="rating">
                <input type="radio" id="star5" name="rating" value="5" checked />
                <label for="star5">&#9733;</label>
                <input type="radio" id="star4" name="rating" value="4" />
                <label for="star4">&#9733;</label>
                <input type="radio" id="star3" name="rating" value="3" />
                <label for="star3">&#9733;</label>
                <input type="radio" id="star2" name="rating" value="2" />
                <label for="star2">&#9733;</label>
                <input type="radio" id="star1" name="rating" value="1" />
                <label for="star1">&#9733;</label>
            </div>
        `;
        hospitalList.appendChild(card);
    });
}

function searchHospitals() {
    const searchText = search.value.toLowerCase();
    const filteredHospitals = hospitals.filter(hospital =>
        hospital.name.toLowerCase().includes(searchText) ||
        hospital.location.toLowerCase().includes(searchText)
    );
    renderHospitals(filteredHospitals);
}

search.addEventListener('keyup', searchHospitals);
renderHospitals(hospitals);