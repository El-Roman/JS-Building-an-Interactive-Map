// create map
// const map = L.map('map').setView([51.505, -0.09], 13);
const map = L.map('map', {
    center: [48.868672, 2.342130],
    zoom: 12,
})

// add openstreetmap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    minZoom: '15',
}).addTo(map);

// create and main add geolocation marker
const marker = L.marker([48.87007, 2.346453])
marker.addTo(map).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()


// draw the 2nd arrondissement



// create red pin marker


// metro station markers



