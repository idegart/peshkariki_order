<template>
    <div>

        <delivery-details-component />

        <delivery-payment-details-component />

        <return-details-component />

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
    import ReturnDetailsComponent from "./details/returnDetailsComponent";
    import PromoDetailsComponent from "./details/promoDetailsComponent";
    import ExtraDetailsComponent from "./details/extraDetailsComponent";
    import ServicesDetailsComponent from "./details/servicesDetailsComponent";
    export default {
        name: "detailsComponent",
        components: {
            ServicesDetailsComponent,
            ExtraDetailsComponent,
            PromoDetailsComponent,
            ReturnDetailsComponent, DeliveryPaymentDetailsComponent, DeliveryDetailsComponent}
    }
</script>

<style scoped>

</style>