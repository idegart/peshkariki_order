export default {
    allDates: [],
    allTimes: [],
    allMetro: {},
    allCities: [],

    maxOrderDots: 10,
    maxOrderDotItems: 10,

    maxItemsSumCost: 50000,
    minItemSumCost: 100,

    weightForNeedCar: 100,

    userId: null,
    orderId: null,

    lastPromo: '',

    isApp: false, // В приложении

    isDemo: false, // Для демонстрации

    isAdmin: false, // Редактируется админом

    isEdit: false, // Заказ редактируется

    createdByPhone: false, // Заказ создан по телефону

    isLegal: false, // Заказ создан юр лицом

    isPublic: false, // Заказ без регистрации

    lastOrderCanceled: false, // Последний заказ был отменен

    walletMethods: [
        {
            text: 'Карта Сбербанка',
            value: 0,
            isVisible: true,
            isDefaultChecked: true
        },{
            text: 'Яндекс.Деньги',
            value: 1,
            isVisible: true,
            isDefaultChecked: false
        },{
            text: 'QIWI',
            value: 2,
            isVisible: true,
            isDefaultChecked: false
        },
    ],

    deliveryPaymentMethods: [
        {
            text: 'Оплата с баланса в Пешкариках',
            value: 2,
            isDefaultChecked: false
        },{
            text: 'Оплата бонусами',
            value: 3,
            isDefaultChecked: false,
        },{
            text: 'Курьер вернет за минусом доставки',
            value: 0,
            isDefaultChecked: false,
        },{
            text: 'Отправитель наличными',
            value: 1,
            isDefaultChecked: true,
        },{
            text: 'Получатель наличными',
            value: 4,
            isDefaultChecked: false,
        },
    ],

    itemsPaymentMethods: [
        {
            text: 'Нет',
            value: 0,
            commissionPst: 0.9,
            isDefaultChecked: true,
        },{
            text: 'Да',
            value: 1,
            commissionPst: 1.8,
            isDefaultChecked: false,
        },{
            text: 'Курьер выкупит груз',
            value: 2,
            commissionPst: 1.8,
            isDefaultChecked: false,
        },
    ],

    typesAuto: [
        {
            id: 0,
            isVisible: true,
            name: 'Пешком',
            weight: 0,
        },{
            id: 1,
            isVisible: true,
            name: 'Легковая машина',
            weight: 100000,
        },{
            id: 2,
            isVisible: true,
            name: 'Каблук',
            weight: 500000,
        },{
            id: 3,
            isVisible: true,
            name: 'Газель',
            weight: 1500000,
        },
    ],

}