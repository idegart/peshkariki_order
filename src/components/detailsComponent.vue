<template>
    <div>

        <delivery-details-component />

        <delivery-payment-details-component />

        <wallet-details-component />

        <payment-details-component />

        <div class="form-group pt-2">

            <promo-details-component />

            <extra-details-component />

            <services-details-component />

        </div>
    </div>
</template>

<script>
    import DeliveryDetailsComponent from "./details/deliveryDetailsComponent";
    import DeliveryPaymentDetailsComponent from "./details/deliveryPaymentDetailsComponent";
    import PromoDetailsComponent from "./details/promoDetailsComponent";
    import ExtraDetailsComponent from "./details/extraDetailsComponent";
    import ServicesDetailsComponent from "./details/servicesDetailsComponent";
    import WalletDetailsComponent from './details/walletDetailsComponent';
    import PaymentDetailsComponent from "./details/paymentDetailsComponent";

    export default {
        name: "detailsComponent",
        components: {
            PaymentDetailsComponent,
            WalletDetailsComponent,
            ServicesDetailsComponent,
            ExtraDetailsComponent,
            PromoDetailsComponent,
            DeliveryDetailsComponent,
            DeliveryPaymentDetailsComponent,
            // WalletDetailsComponent
        }
    }
</script>

<style scoped>

</style>