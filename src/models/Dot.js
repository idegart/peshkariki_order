import { get } from 'lodash'

function tommorowDate() {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    tomorrow.setHours(0, 0, 0, 0)

    return tomorrow.getTime()
}

export default class Dot {
    constructor (props) {
        this.city       = get(props, 'city', 1);
        this.address    = get(props, 'address', '');
        this.apartment  = get(props, 'apartment', '');
        this.metro      = get(props, 'metro', null);
        this.contact    = get(props, 'contact', '');
        this.phone      = get(props, 'phone', '');
        this.date       = get(props, 'date', tommorowDate());
        this.timeFrom   = get(props, 'timeFrom', 8);
        this.timeTo     = get(props, 'timeTo', 20);


        this.comment    = get(props, 'comment', '');

        this.items      = get(props, 'items', []);
    }
}