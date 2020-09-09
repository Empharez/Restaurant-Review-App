export function searchNearby(google, map, request) {
    return new Promise((resolve, reject) => {
      const service = new google.maps.places.PlacesService(map);
  
      service.nearbySearch(request, (results, status, pagination) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
  
          resolve(results, pagination);
        } else {
          reject(results, status);
        }
      })
    });
  }

  export function getDetails(google, placeId) {
    return new Promise((resolve, reject) => {
      const service = new google.maps.places.PlacesService(document.createElement('div'));
      const request = {placeId}
  
      service.getDetails(request, (place, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.log("error", status)
          reject(status);
        } else {
          console.log("check place", place)
          resolve(place);

        }
      })
    })
  }