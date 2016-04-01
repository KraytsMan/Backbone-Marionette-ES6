var { Collection } = Backbone;

import { Person } from 'application/model/Person'

export class PersonCollection extends Collection {
    constructor(options) {
        this.model = Person;
        super(options);
    }

    comparator(person) {
        return person.get('firstName') + ' '
            + person.get('lastName') + ' '
            + person.get('phone');
    }
}
