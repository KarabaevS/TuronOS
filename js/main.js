    let selectHeader = document.querySelectorAll('.select_header');
    let selectItem = document.querySelector('.select_item');

    
let btn = document.querySelectorAll('.btn-pop');
let popup = document.querySelector('.modal-menu');
let closeBtn = document.querySelector('.close_icon')
let bodySelect = document.querySelector('body')
let overlay = document.querySelector('.overlay')
btn.forEach(item=>{
    item.addEventListener('click', function () {
        popup.classList.add('is_active');
        overlay.style.display="block";
      })
})


closeBtn.addEventListener('click', function () {
    popup.classList.remove('is_active');
    overlay.style.display="none";
  })
overlay.addEventListener('click', function(){
    popup.classList.remove('is_active');
    overlay.style.display="none";   
})





// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 13,
//   });
//   var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
//   var marker = new google.maps.Marker({
//     position:  { lat: 41.281541, lng: 69.210802 },
//     map: map,
//     icon: iconBase + 'img/Group 598.svg'
//   });
// };



let burgerBtn = document.querySelector('.burger-menu-btn');
let burgerBody =document.querySelector('.burger-body');
let burger = document.querySelector('.burger');
const body = document.querySelector('body');
console.log(burgerBtn);
burgerBtn.addEventListener('click', function(){
  burger.classList.toggle('active');
  if(burger.classList.contains('active')){

    body.style.overflow = 'hidden';
  }else{
    body.style.overflow = 'visible';
  }
})
function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 41.276663, lng:  69.233274 },
      zoom: 14,
  });
  const contentString =
  '<div id="content">' +
  '<div id="siteNotice">' +
  '<img src="img/Group601.jpg">' +
  '<div id="bodyContent">' +
  "Узбекистан, г.Ташкент"+ 
  "Чиланзарский район, ул. Бунедкор, д. 42"+
  "</br>"+"</br>"+
  "(Ориентир: станция метро “МИРЗО"+
  " УЛУГБЕК”, Стадион “БУНЕДКОР”)"+
  "</div>" +
  "</div>";
const infowindow = new google.maps.InfoWindow({
  content: contentString,
  maxWidth: 379,
});
  const marker = new google.maps.Marker({
      position: new google.maps.LatLng( 41.276663,  69.233274 ),
      icon: {
          url: 'img/Group 598.png',
      },
      map: map,
  });
  marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  };
initMap();