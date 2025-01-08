document.addEventListener("DOMContentLoaded", function () {
    // ایجاد نقشه
    var map = L.map("map", {
        center: [48.0, 37.0], // مرکز بین دو نقطه
        zoom: 5,
        preferCanvas: false,
    });

    // لایه کاشی
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // نقطه اول: دریاچه چیتگر
    var chitgarMarker = L.marker([35.745061, 51.213648]).addTo(map);
    chitgarMarker.bindPopup("<b>Chitgar Lake</b><br>Coordinates: 35.745061, 51.213648");

    // نقطه دوم: مخزن فنلاند
    var finlandMarker = L.marker([61.497752, 23.761025]).addTo(map);
    finlandMarker.bindPopup("<b>Reservoir in Finland</b><br>Coordinates: 61.497752, 23.761025");
});
