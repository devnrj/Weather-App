export class Forecast {
    location :string; 
    skyCondition :string;
    humid :string;
    percp :string;
    wind :string;
    icon :string;
    date :string;
    maxTemperature :string;
    minTemperature :string;
    constructor(location : string,condition : string,humid : string,percp : string,wind : string,icon : string,date : string,maxTemperature : string,minTemperature : string){
        this.location = location;
        this.skyCondition = condition;
        this.humid=humid;
        this.percp=percp;
        this.wind =wind ;
        this.icon =icon ;
        this.date =date ;
        this.maxTemperature = maxTemperature;
        this.minTemperature = minTemperature;
    }
}
