<template>

    <h1>Online Banking App</h1>
    <h2>{{ greeting }}</h2>
    <form id="loginForm" @submit="handleSubmit">

      <input type="text" v-model="username" class="username form-control">
      <input type="password" v-model="password" class="password form-control">

      <button class="btn btn-default" type="submit">Login</button>

    </form>

</template>

<script>
import {useRouter} from 'vue-router';
import greeting from '../fake_npm_pkg/greeting.js';
export default {
    name: "LoginPage",
    data: () => {
        return {
            username: '',
            password: '',

            greeting: '',
        }
    },
    mounted() {
        this.greeting = greeting();
    },
    methods: {
        handleSubmit(e) {
          e.preventDefault();
          console.info('submitted login credentials', this.username, this.password);
          const router = useRouter();
          this.$router.push('/banking')
        },
    }
}
</script>

<style scoped>

</style>
