const apiKeyMapa = ''; // INSERTEN SU API KEY DE GOOGLE MAPS API ACA!
let clima = {
  "apiKey": "", // INSERTEN SU API KEY DE https://openweathermap.org/ ACA!
  fetchClima: function (ciudad){
  fetch("http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&units=metric&lang=es&appid=" + this.apiKey).then(function(response) 
   { if (response.status !== 200) {console.log('Parece hay un problema de tipeo, la ciudad no existe. Error :' + response.status);
   return;
 }response.json()
  .then(function(data) {
    //

   const { name } = data;
   const { icon, description } = data.weather[0];
   const { temp, humidity, temp_min, temp_max, pressure, feels_like } = data.main;
   const { speed } = data.wind;
   const { country } = data.sys;

   console.log(name, icon, description, temp, humidity, speed);
   document.querySelector(".ciudad").innerText = name + ", " + country;
   document.querySelector(".icono").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
   document.querySelector(".mapa").src = "https://www.google.com/maps/embed/v1/place?key=" + apiKeyMapa + "&q=" + name;
   document.querySelector(".descripcion").innerText = description;
   document.querySelector(".temp").innerText = temp + '°C';
   document.querySelector(".tempMin").innerText = "Temp.Mín: " + temp_min + '°C';
   document.querySelector(".tempMax").innerText = "Temp.Máx: " + temp_max + '°C';
   document.querySelector(".viento").innerText = "Viento: " + speed + 'km/h';
   document.querySelector(".sens").innerText = "Sensación: " + feels_like + '°C';
   document.querySelector(".humedad").innerText = "Humedad: " + humidity + '%';
   document.querySelector(".presion").innerText = "Presión: " + pressure + 'hPa';
   document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    console.log(data);
});
}) .catch(function(err) {
    console.log('Fetch Error', err);
  });
},
   buscar: function(){
     this.fetchClima(document.querySelector(".buscador").value);
   }
};

document.querySelector(".buscar button").addEventListener("click", function(){
  clima.buscar();
})
