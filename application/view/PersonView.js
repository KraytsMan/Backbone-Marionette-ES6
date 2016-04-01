var Marionette = Backbone.Marionette;

import { Person } from 'application/model/Person'

export class PersonView extends Marionette.ItemView{
    constructor(options) {
            this.model = Person;
            this.template = '#contact';
            super(options);
    }
}