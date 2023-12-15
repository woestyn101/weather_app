 
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
//  var mylat = 44.34;
//  var mylong = 10.99;
// var mylat = 40.9665536;
// var mylong = 40.9665536;


var city = "Akron";

var mykey = "58c9977be249fb42b0380f28d92218ca"
 
   console.log("yes");

// var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + mylat + "&lon="+ mylong +"&appid=" + mykey;

var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=50&appid="+ mykey;

  function getData(){

   fetch(url);

  }

  getData();

