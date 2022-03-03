function startMap(){
    let mapProp= {
        center: new google.maps.LatLng(51.508742,-0.120850),
        zoom: 10,
      };
    let map = new google.maps.Map(document.getElementById("map"),mapProp);
}