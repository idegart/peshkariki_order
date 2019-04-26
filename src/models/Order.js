import { get } from 'lodash'

export default class Order {
    constructor(props) {
        this.dots       = get(props, 'dots', []);
        this.services   = get(props, 'services', []);
        this.name       = get(props, 'name', '');
        this.promo      = get(props, 'promo', '');

    }
}