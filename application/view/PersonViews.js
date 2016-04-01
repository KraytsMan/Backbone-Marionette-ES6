var Marionette = Backbone.Marionette;

import {Inject, annotate} from 'di';
import {PersonRowView} from 'application/view/PersonRowView'
import {PersonCollection} from 'application/collection/PersonCollection'

export class PersonViews extends Marionette.CompositeView {
    constructor(@Inject(PersonCollection) personCollection) {
        this.collection = personCollection;
        this.tagName = 'table';
        this.className = 'table table-default';
        this.template = '#contact-table-head';
        this.childView = PersonRowView;
        super();
    }
}
