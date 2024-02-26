class uberPrice {
    constructor(baseFare,costPerKm,costPerMin){
        this.baseFare=baseFare;
        this.costPerKm=costPerKm;
        this.costPerMin=costPerMin;
    }
    calculateUberPrice(dist,time){
        if(dist<0||time<0){
            return "Invalid Input";

        }
        const Price= this.baseFare+dist*this.costPerKm+time*this.costPerMin;
        return `${Price.toFixed(2)}`;

    }
    
}
const Ubercalc = new uberPrice(15,20,3);
const price =Ubercalc.calculateUberPrice(10,5);
console.log(price);