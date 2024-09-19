<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> | 
      <router-link to="/register">Register</router-link> 
      <button @click="userStore.logOutUser">Logout</button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { useUserStore } from './stores/user';
  const userStore = useUserStore();

</script>