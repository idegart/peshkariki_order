import { get } from 'lodash'

export default class Service {
    constructor(props) {
        this.id = get(props, 'id')
        this.alias = get(props, 'alias')
        this.name = get(props, 'name')
        this.description = get(props, 'description')
        this.price = get(props, 'price', 0)
        this.isChecked = get(props, 'isChecked', false)
        this.isVisible = get(props, 'isVisible', true)
        this.isImportant = get(props, 'isImportant', false)
        this.isAvailable = get(props, 'isAvailable', true)
        this.costText = get(props, 'costText')
    }
}