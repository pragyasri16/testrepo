<template>
  <form @submit="handleLogin">
    <input type="text" placeholder="Email" v-model="email"/>
    <input type="password" placeholder="Password" v-model="password"/>
    <button type="submit">Login</button>
  </form>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      const email = this.email;
      const password = this.password;
      this.$store.dispatch('login', { email, password })
      .then((user) => {
        // do something with user object
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
};
</script>