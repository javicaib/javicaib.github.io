function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat:  22.989606519413385, lng:  -82.46453053863158};
   
    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}