class Restaurant{
    constructor(restaurantName, address, latitude, longitude, globalRating, numberOfRating, placeId){
        this.restaurantName = restaurantName;
        this.address = address;
        this.ratings = [];
        this.position = {
            latitude: latitude,
            longitude: longitude
        };
        this.globalRating = globalRating;
        this.numberOfRating = numberOfRating;
        this.placeId = placeId;
        if(this.placeId != null && this.globalRating === 0){
            this.numberOfRating = 1;
            this.globalRating = (Math.random() * 4) + 1;

        }

    }

    getRating(){
        
        if(this.numberOfRating === 0){
            return 0;

        }else{
            
            return this.globalRating;
        }
    }
    addRating(stars, comment){
        this.ratings.push({
            stars: stars,
            comment:comment
        })
        this.globalRating = (this.globalRating * this.numberOfRating + stars) / (this.numberOfRating + 1);
        this.numberOfRating++;
    }
}

export default Restaurant;