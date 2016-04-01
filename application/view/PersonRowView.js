var Marionette = Backbone.Marionette;


import {Inject, annotate} from 'di'
import {Person} from 'application/model/Person'
import {CustomRegionManager} from 'application/CustomRegionManager'
import {PersonView} from 'application/view/PersonView'

export class PersonRowView extends Marionette.ItemView {
    constructor(options) {
        this.tagName = 'tr';
        this.events = {
            'click': 'itemOnClick',
            'click a.show': 'show',
            'click button.delete': 'delete'
        };
        super(options);
    }

    get template() {
        return '#contact-table-body';
    }

    delete() {
        this.model.collection.remove(this.model);
    }

    show() {
        // this.regionManager.get('main').show(new PersonView({model: this.model}));
    }

    itemOnClick(e) {
        if (e.target.nodeName === 'BUTTON') return false;
        alert(this.model.get('phone'));
    }

    remove() {
        var self = this;
        this.$el.fadeOut(function () {
            Marionette.ItemView.prototype.remove.call(self);
        });
    }
}