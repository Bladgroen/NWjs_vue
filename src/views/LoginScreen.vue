<template>
  <div class="background">
    <div class="form">
      <label>Email</label>
      <input placeholder="Email" type="email" v-model="email"/>
      <label>Password</label>
      <input placeholder="Password" type="password" v-model="password" />
      <div class="buttons">
        <button @click="$router.push('/register')" class="registerButton">Register</button>
        <button @click="login" class="loginButton">Login</button>
      </div>
    </div>

    <button @click="test">Set</button>

  </div>
</template>

<script>
import {loginUser} from "@/clients/apiClient.ts";
import {getAuth} from "firebase/auth";

export default {
  name: "LoginScreen",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    setStorage() {
      localStorage.setItem('test', 'gay');
    },
    async login() {
      await loginUser(this.email, this.password);
    },
    test() {
      const auth = getAuth();
      console.log(auth.currentUser.email);
      console.log(auth.currentUser.getIdToken())
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>