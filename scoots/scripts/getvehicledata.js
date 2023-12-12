const url = 'https://hailycamp.github.io/wdd230/scoots/data/vehicles.json';

function displayVehicles(vehicleArray) {

    const table = document.getElementById('vehicle-data-table');

    vehicleArray.forEach(vehicle => {

        const row = document.createElement('tr');
        const name = document.createElement('th');
        const capacity = document.createElement('td');
        const halfPrice = document.createElement('td');
        const fullPrice = document.createElement('td');
        const halfPriceWalk = document.createElement('td');
        const fullPriceWalk = document.createElement('td');

        name.innerText = `${vehicle.name}`;
        name.setAttribute('scope', 'row');
        capacity.innerText = `${vehicle.capacity}`;
        halfPrice.innerText = `${vehicle.halfDayPrice}`;
        fullPrice.innerText = `${vehicle.fullDayPrice}`;
        halfPriceWalk.innerText = `${vehicle.halfDayPriceWalkIn}`;
        fullPriceWalk.innerText = `${vehicle.fullDayPriceWalkIn}`;

        row.appendChild(name);
        row.appendChild(capacity);
        row.appendChild(halfPrice);
        row.appendChild(fullPrice);
        row.appendChild(halfPriceWalk);
        row.appendChild(fullPriceWalk);

        table.appendChild(row);

    });
}

async function getVehicleData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.vehicles); 
    displayVehicles(data.vehicles); 
}

getVehicleData();