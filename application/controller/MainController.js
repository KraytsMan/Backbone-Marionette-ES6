var Marionette = Backbone.Marionette;

import {Inject, annotate} from 'di';
import { Person } from 'application/model/Person'
import { PersonCollection } from 'application/collection/PersonCollection'
import { PersonViews } from 'application/view/PersonViews'
import { CustomRegionManager } from 'application/CustomRegionManager'

export class MainController extends Marionette.Controller {

    constructor(@Inject(CustomRegionManager) customRegionManager,
                @Inject(PersonViews) personViews,
                @Inject(PersonCollection) personCollection
    ) {
        this.personCollection = personCollection;
        this.regionManager = customRegionManager;
        this.personViews = personViews;
        console.log('In controller constructor!');
        super();
    }

    home() {
        var person = new Person();
        person.set('firstName', 'Waldemar');
        person.set('lastName', 'KraytsMan');
        person.set('phone', '0502220390');
        var person2 = new Person();
        person2.set('firstName', 'Waldemar');
        person2.set('lastName', 'Nomad');
        person2.set('phone', '0502220391');
        var person3 = new Person();
        person3.set('firstName', 'Waldemar');
        person3.set('lastName', 'Kraietskyi');
        person3.set('phone', '0502220392');
        this.personCollection.add(person);
        this.personCollection.add(person2);
        this.personCollection.add(person3);
        this.regionManager.get('main').show(this.personViews);
    }
}