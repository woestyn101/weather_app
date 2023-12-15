$(function () { 

    

    // function init(){
        var showBtn = document.getElementById("showBtn");
        var locationBtn = document.getElementById("locationBtn");

        var latSpan = document.getElementById("latitude");
        var longspan = document.getElementById("longitude");

        var userLat = document.getElementById("theLat").value;
        var userLong = document.getElementById("theLong").value;

        showBtn.addEventListener("click", getWeather);

        function getWeather(){
            var key = '58c9977be249fb42b0380f28d92218ca';
            // var lang = 'en';
            // var units = 'metric';
            var url = `https://api.openweathermap.org/data/2.5/weather?lat=${userLat}&lon=${userLong}&appid=${key}`;

            fetch(url)
            .then(response => {
                if(!response.ok) throw Error (response.statusText);
                return response.json();
            })
            .then((data)=>{
                console.log(data);
            })
            .catch(console.err);

        }

       

        // get geolocation button and funtion
        locationBtn.addEventListener("click", getLocation );

        function getLocation (){
            if ("geolocation" in navigator) {
                /* geolocation is available */
                console.log("geolocation is available");
                
                navigator.geolocation.getCurrentPosition(position => {
                    const { latitude, longitude } = position.coords;
                    console.log(latitude.toFixed(2));
                    console.log(longitude.toFixed(2));
                    
                    latSpan.innerHTML = latitude;
                    longspan.innerHTML = latitude;
                    userLat = latitude;
                    userLong = longitude;
                    // Show a map centered at latitude / longitude.
                  });
                
                    } else {
                        /* geolocation IS NOT available */
                        console.log("geolocation is NOT available");
                    }

                    }














 });