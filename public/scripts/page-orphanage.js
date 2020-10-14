const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map("mapid", options).setView([-23.5197659, -46.8122576], 14);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

//creat icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  IconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create an add marker
L.marker([-23.5197659, -46.8122576], { icon })
.addTo(map);

//image gallery

function selectImage(event){
  
}