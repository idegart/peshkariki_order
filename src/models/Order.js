import { get } from 'lodash'

export default class Order {
    constructor(props) {
        this.dots                   = get(props, 'dots', []);
        this.services               = get(props, 'services', []);
        this.comment                = get(props, 'comment');
        this.typeAuto               = get(props, 'typeAuto', 0);

        this.itemsPaymentMethod     = get(props, 'itemsPaymentMethod');
        this.deliveryPaymentMethod  = get(props, 'deliveryPaymentMethod');

        this.walletMethod           = get(props, 'walletMethod');
        this.walletValue            = get(props, 'walletValue');

        this.courierAddition        = get(props, 'courierAddition');
        this.shopName               = get(props, 'shopName');
        this.shopInnerId            = get(props, 'shopInnerId');

        this.promo                  = get(props, 'promo');
        this.promoValid             = get(props, 'promoValid', false);
    }
}