import {get} from 'lodash'

export default class Item {
    constructor(props) {
        this.name   = get(props, 'name', '');
        this.count  = get(props, 'count', 1);
        this.weight = get(props, 'weight', null);
        this.price  = get(props, 'price', null)
    }

}