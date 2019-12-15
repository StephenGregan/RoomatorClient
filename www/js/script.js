function getCurrentLocation()
{

    alert("Location");
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(position)
{
    var longitude = position.coords.longitude;
    var latitude = position.coords.latitude;

    alert("Longitude: " + longitude + "Latitude: " + latitude);
}

function onError()
{
    alert("error");

}


 function getLocation()
{
    navigator.geolocation.getCurrentPosition(geoCallback, onError);

}

function geoCallback(position)
{
    var pos = "Position: " + position;
    document.getElementById("position").innerHTML = pos;
    console.log(position.coords.latitude);
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    var text = "Latitude: " + lat + "Longitude" + lng;
    document.getElementById("position").innerHTML = text;
    console.log(lat + lng);
}