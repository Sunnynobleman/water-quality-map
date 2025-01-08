document.addEventListener("DOMContentLoaded", function () {
    // ایجاد نقشه
    var map = L.map("map", {
        preferCanvas: false,
    });

    // لایه کاشی
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // نقاط
    var chitgarMarker = L.marker([35.745061, 51.213648]).addTo(map);
    chitgarMarker.bindPopup("<b>Chitgar Lake</b><br>Coordinates: 35.745061, 51.213648");

    var finlandMarker = L.marker([61.497752, 23.761025]).addTo(map);
    finlandMarker.bindPopup("<b>Reservoir in Finland</b><br>Coordinates: 61.497752, 23.761025");

    // استفاده از fitBounds برای نمایش هر دو نقطه
    var bounds = [
        [35.745061, 51.213648], // مختصات چیتگر
        [61.497752, 23.761025], // مختصات فنلاند
    ];
    map.fitBounds(bounds);
});
