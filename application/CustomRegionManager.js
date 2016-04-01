var Marionette = Backbone.Marionette;

export class CustomRegionManager extends Marionette.RegionManager{
    constructor(){
        console.log('Inside CustomRegionManager!');
        this.regions = {
           main:'#main-region'
        };
        super();
    }
}