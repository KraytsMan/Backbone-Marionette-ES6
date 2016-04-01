var Marionette = Backbone.Marionette;

import {Inject, annotate} from 'di';
import { MainController } from 'application/controller/MainController'

export class MainRouter extends Marionette.AppRouter {

    constructor(@Inject(MainController) mainController) {
        this.controller = mainController;
        this.appRoutes = {'': 'home'};
        console.log('In router constructor');
        super();
    }

}