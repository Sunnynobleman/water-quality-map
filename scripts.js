var map = L.map("map", {
    center: [35.745061, 51.213648],
    zoom: 12,
    preferCanvas: false,
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

var marker = L.marker([35.745061, 51.213648]).addTo(map);
marker.bindPopup("<b>Chitgar Lake</b><br>Coordinates: 35.745061, 51.213648");
