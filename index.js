function updateMap() {
    console.log("Updating map with data");
    fetch("./data.json")
        .then(response => response.json())
        .then(rsp => {

            //It will fetch all the data from data.json file
            //    console.log(rsp.data);

            //  It will fetch only the object/data from 0th index in the json file
            //    console.log(rsp.data[0]);

            //  It will fetch the latitide value from the 0th index position in the json file
            //    console.log(rsp.data[0].latitude);

            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                cases = element.infected;

                if(cases>255){
                color= "rgb(255,0,0)";
            }
            else{
                color=`rgb(${color},0,0)`;
            }

            // Mark on the Map
            new mapboxgl.Marker({
                draggable:false,
                color:color,
            }).setLngLat([longitude,latitude])
            .addTo(map);
            });
        })
}

updateMap();