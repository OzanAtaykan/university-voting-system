<template>
  <div class="login">
    <h1>Login</h1>

    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <button>Login</button>

    <button @click="showCreate = !showCreate">
      Create Account
    </button>

    <div v-if="showCreate">
      <h2>Create Account</h2>

      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Create</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      showCreate: false
    };
  }
};
</script>

<style scoped>
.login {
  min-height: calc(200vh-80px);
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;
}

input,
button {
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border: 1px solid rgb(0, 0, 0);
  padding: 8px;
  width: 250px;
}
</style>
