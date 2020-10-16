const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//create map
const map = L.map("mapid", options).setView([-23.5197659, -46.8122576], 14);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//creat icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  IconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create an add marker
L.marker([-23.5197659, -46.8122576], { icon }).addTo(map);

//image gallery

function selectImage(event) {
  const button = event.currentTarget;

  //retirar all classes active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  //selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  //atualizar o container de imagem
  imageContainer.src = image.src;

  //adicionar a classe active ao botao clicado
  button.classList.add("active");
}
