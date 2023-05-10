<template>
    <h1>Transfer Money</h1>
    <h2>{{ greeting }}</h2>
    <form id="transferform" method="get">

        <p>Amount in Euros</p>
        <input type="number" v-model="amount" name="amount" class="amount form-control">

        <p>Recipient</p>
        <input type="text" v-model="recipient" name="recipient" class="recipient form-control">

        <button class="btn btn-default" type="submit">Transfer</button>

    </form>
</template>

<script>
import greeting from "../fake_npm_pkg/greeting.js";
import {useRouter} from "vue-router";

export default {
    name: "BankingPage",
    data: () => {
        return {
            amount: '',
            recipient: '',

            greeting: '',
        }
    },
    mounted() {
        this.greeting = greeting();
    },
}
</script>

<style scoped>

</style>
