function checkWeather() {

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("Get", "http://w1.weather.gov/xml/current_obs/KADS.xml", true);
xmlhttp.send(null);

xmlhttp.onload = function(){
  var xmlDoc = xmlhttp.responseXML;
  var weather = xmlDoc.getElementsByTagName("weather");
  document.getElementById("divWeather").innerHTML += "At Addison we have " + weather[0].textContent;
}

}


function checkWeatherJQ(){

  $.get("http://w1.weather.gov/xml/current_obs/KADS.xml",
                  function(data){
                        var weather = data.getElementsByTagName("weather");
                        $("#divWeatherJQ").html("At addison we have "+ weather[0].innerHTML);

                  });
}
