var Marionette = Backbone.Marionette;

import {Inject, annotate} from 'di';
import { CustomRegionManager } from './CustomRegionManager'
import { MainRouter } from './router/MainRouter'


export class Boot extends Marionette.Application {
    constructor(@Inject(CustomRegionManager) customRegionManager,
                @Inject(MainRouter) mainRouter) {
        this.customRegionManager = customRegionManager;
        this.mainRouter = mainRouter;
        console.log('Its started successfully!');
        Backbone.history.start();
    }
}