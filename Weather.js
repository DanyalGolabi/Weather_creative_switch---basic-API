console.log("I'm working");


var xhr = new XMLHttpRequest();

var URL = "http://api.openweathermap.org/data/2.5/weather?q={London}&appid=1cc43775f824b4ccb3a4dfeee9b2ae34";
//var APIAuth = "1cc43775f824b4ccb3a4dfeee9b2ae34"
 

xhr.open("GET", URL, false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);

var weatherResponseStringify = JSON.stringify(xhr.responseText, "", 2);
var weatherResponseParse = JSON.parse(xhr.responseText);

console.log(weatherResponseParse.weather[0].main);

var condition = weatherResponseParse.weather[0].main;

switch (condition){
   case 'Thunderstorm': 
   var img = document.createElement("IMG");
   img.src = "./Weather Jpgs/Thunder.jpg";
   var oldImg = document.getElementById('oldimg');
   document.getElementById('picture').replaceChild(img, oldImg)
   break;

   case 'Drizzle':
   var img = document.createElement("IMG");
   img.src = "./Weather Jpgs/Drizzle.jpg";
   var oldImg = document.getElementById('oldimg');
   document.getElementById('picture').replaceChild(img, oldImg)
   break;

   case 'Rain':
   var img = document.createElement("IMG");
   img.src = "./Weather Jpgs/Rainy.jpg";
   var oldImg = document.getElementById('oldimg');
   document.getElementById('picture').replaceChild(img, oldImg)
   break;

   case 'Snow':
   var img = document.createElement("IMG");
   img.src = "./Weather Jpgs/Snow.jpg";
   var oldImg = document.getElementById('oldimg');
   document.getElementById('picture').replaceChild(img, oldImg)
   break;

   case 'Atmosphere':
   var img = document.createElement("IMG");
   img.src = "./Weather Jpgs/Fog.jpg";
   var oldImg = document.getElementById('oldimg');
   document.getElementById('picture').replaceChild(img, oldImg)
   break;

   case 'Clear':
   var img = document.createElement("IMG");
   img.src = "./Weather Jpgs/Sunny.jpg";
   var oldImg = document.getElementById('oldimg');
   document.getElementById('picture').replaceChild(img, oldImg)
   break;

   case 'Clouds':
   var img = document.createElement("IMG");
   img.src = "./Weather Jpgs/Clouds.jpg";
   var oldImg = document.getElementById('oldimg');
   document.getElementById('picture').replaceChild(img, oldImg)
   break;

   case 'Extreme':
   var img = document.createElement("IMG");
   img.src = "./Weather Jpgs/Extreme.jpg";
   var oldImg = document.getElementById('oldimg');
   document.getElementById('picture').replaceChild(img, oldImg)
   break;
   
   case 'Additional':
   var img = document.createElement("IMG");
   img.src = "./Weather Jpgs/Default.jpg";
   var oldImg = document.getElementById('oldimg');
   document.getElementById('picture').replaceChild(img, oldImg)
   break;

   default:
   var img = document.createElement("IMG");
   img.src = "./Weather Jpgs/Default.jpg";
   var oldImg = document.getElementById('oldimg');
   document.getElementById('picture').replaceChild(img, oldImg)
}