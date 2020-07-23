class Restaurant{
    constructor(restaurantName, address, latitude, longitude){
        this.restaurantName = restaurantName;
        this.address = address;
        this.ratings = [];
        this.position = {
            latitude: latitude,
            longitude: longitude
        }
        

    }
}

export default Restaurant;