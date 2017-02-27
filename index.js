var locations = [
    [
        "Bibliocafe",
        48.463417, 
         -123.309940
    ],
    [
    		"MacLaurin Building",
        48.462781,
        -123.313481
    ],    
    [
        "Cinacenta",
        48.465357,
         -123.308224
    ],
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(48.463152,  -123.311588),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3]),
        map: map
      });

    var count = 0;

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
           if (locations[i][1]) {
            alert("Latitude,Longitude: 48.463417,-123.309940");
            alert(count++);
        } else if (locations[i][2]) {
            alert("Latitude,Longitude: 48.462781,-123.313481" + count);
            alert(count++);
        } else {
            alert("Latitude,Longitude: 48.465357,-123.308224" + count)
            alert(count++);
        };
        }
      })(marker, i));
    }
