function coords2(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var coords = [position.coords.latitude, position.coords.longitude];
            callback(coords);
            // return coords;
        });
    }
}

function weather(coords) {
    var latitude = coords[0];
    var longitude = coords[1];
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=d3cb3df74057494889e3cc6ac496ebb0", function (json) {

        var html = "";
        // for(var key in json){
        //   console.log(key + " " + new_json[key]);
        // }
        //
        // var jsonString = JSON.stringify(json);
        var description = json["weather"][0]["description"];
        var temperature = Math.floor(1.8 * ((json["main"]["temp"]) - 273) + 32) + "&deg" + " farenheit";
        var temp_celsius = Math.floor(json["main"]["temp"] - 273) + "&deg" + " celsius";
        var humidity = json["main"]["humidity"];
        var wind_speed = json["wind"]["speed"];
        var city = json["name"];
        var country = json["sys"]["country"];
        // $("#weatherAPI").html(description);
        if (description.indexOf("sunny") >= 0) {
            $("body").attr("id", "sunny");
        } else if (description.indexOf("rain") >= 0) {
            $("body").attr("id", "rainy");
        } else if (description.indexOf("cloud") >= 0) {
            $("body").attr("id", "cloudy");
        }


        $("#weatherAPI").append("<div class='well'>" + description + "</div>");
        $("#location").append("<div class='well'>" + "<p>" + city + ", " + country + "</p>" + "</div>");
        $("#weatherAPI").append("<div class='well' id='temp_div'>" + "<span id='temp_f'>" + temperature + "</span>" + "<span id='temp_c'>" + temp_celsius + "</span>" + "</div>");
        $("#weatherAPI").append("<div class='well'>" + humidity + "</div>");



        // $("#weatherAPI").append("<br>" + "latitude: " + latitude + "<br>longitude: " + longitude);

    });
}

// $("#weatherAPI").append("<button id='action'>Button!</button>");

// $("#action").on("click", function(){
coords2(weather);
// })

// $("#temp_div").on("click", function(){
//   $("#temp_c").toggle();
//   $("#temp_f").toggle();
//   alert("fucks");
//
// });

$("#weatherAPI").on("click", function () {
    $("#temp_c").toggle();
    $("#temp_f").toggle();
})
