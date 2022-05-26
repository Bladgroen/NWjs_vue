<template>
  <div class="background">
    <div class="form">
      <label>Email</label>
      <input placeholder="Email" type="email" v-model="email"/>
      <label>Password</label>
      <input placeholder="Password" type="password" v-model="password" />
      <button class="registerButton" @click="register">Register</button>
      <button @click="test">test</button>
      <a href="/login">login</a>
    </div>
  </div>
</template>

<script>
import {registerUser, test2} from "@/clients/apiClient.ts";

export default {
  name: "RegisterScreen",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async register() {
      await registerUser(this.email, this.password);
    },
    test() {
      test2();
    }
  }

}
</script>

<style scoped>
.background {
  color: #2b2b2b;
  margin: 0 auto;
}

.form {
  background-color: #aaaaaa;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  padding: 0.5rem
}
input {
  width: 75%;
  margin: 0 auto;
  margin-bottom: 1rem;
}

.registerButton {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
}

label {
  color: white;
}
</style>