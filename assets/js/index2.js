 

//  var mylat = 44.34;
//  var mylong = 10.99;
 var mylat = 40.9665536;
 var mylong = 40.9665536;

 var mykey = "58c9977be249fb42b0380f28d92218ca"
  
    console.log("yes");

var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + mylat + "&lon="+ mylong +"&appid=" + mykey;

   function getData(){

    fetch(url);

   }

   getData();

