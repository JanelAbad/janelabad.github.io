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
    title: "Illinois Institute of Technology"
  });

  // Feature 3: info window that opens when the marker is clicked
  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Illinois Tech</h3><p>3300 S Federal St, Chicago, IL</p>"
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
}

const questionsBtn = document.getElementById("questions-btn");

if (questionsBtn) {
  questionsBtn.addEventListener("click", function () {
    alert("If you have questions, contact me at:\n\njabad@fake.email");
    });
}