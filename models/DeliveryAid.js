class DeliveryAid{
  constructor(){
    this.pizzasDelivered = 1; // counts for the 1st move
    this.location = [0,0] // to know their whereabouts
  }

  getLocation(){
    return this.location;
  }

  setLocation(coordinates){ 
    // validate coordinates
    if(coordinates instanceof Array){
      this.location = coordinates; 

      return true;
    } else{
      return false;
    }
  }

}

module.exports = DeliveryAid;