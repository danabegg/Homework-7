var locations = [
    [
        "McPherson Library",
        48.463449,
         -123.309662
    ],
    [
    		"UVIC Bookstore",
        48.466247,
        -123.309753
    ],    
    [
        "Student Union Building",
        48.465173,
         -123.308397
    ],
    [
    		"Bibliocafe",
        48.463424,
        -123.309932
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
        position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3], locations[i][4]),
        map: map
      });

    var count = 0;

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
           if (locations[i][1]) {
            alert("Latitude,Longitude: 48.463449,-123.309662");
            alert(count++);
        } else if (locations[i][2]) {
            alert("Latitude,Longitude: 48.466247,-123.309753" + count);
            alert(count++);
        } else (locations[i][3]) {
            alert("Latitude,Longitude: 48.465173,-123.308397" + count)
            alert(count++);
    
        };
        }
      })(marker, i));
    }