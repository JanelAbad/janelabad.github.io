function initMap() {
  const iit = { lat: 41.8349, lng: -87.6270 };

  // Feature 1: hybrid map type (satellite + street labels)
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: iit,
    mapTypeId: "hybrid"
  });

  // Feature 2: marker
  const marker = new google.maps.Marker({
    position: iit,
    map: map,
    title: "Illinois Institute of Technology",
    icon: {
      url: "media/IIT.png",
      scaledSize: new google.maps.Size(50, 50)
    }
  });

  // Feature 3: info window that opens when the marker is clicked
  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Illinois Tech</h3><p>3300 S Federal St, Chicago, IL</p>"
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });

  // Feature 4: Naval Station Great Lakes marker with custom Navy icon
  const greatLakes = { lat: 42.3086, lng: -87.8484 };

  const navyMarker = new google.maps.Marker({
    position: greatLakes,
    map: map,
    title: "Naval Station Great Lakes",
    icon: {
      url: "media/Navy.png",
      scaledSize: new google.maps.Size(50, 50)
    }
  });

  // Navy marker popup
  const navyInfo = new google.maps.InfoWindow({
    content: "<h3>Navy Boot Camp</h3><p>Great Lakes, IL</p>"
  });

  navyMarker.addListener("click", function () {
    navyInfo.open(map, navyMarker);
  });

  // Feature 5: auto-zoom so both markers fit on the map
  const bounds = new google.maps.LatLngBounds();
  bounds.extend(iit);
  bounds.extend(greatLakes);
  map.fitBounds(bounds);

}

const questionsBtn = document.getElementById("questions-btn");

if (questionsBtn) {
  questionsBtn.addEventListener("click", function () {
    alert("If you have questions, contact me at:\n\njabad@fake.email");
    });
}