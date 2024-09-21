<template>
  <div>
    <nav v-if="!userStore.loadingSession">
      <router-link to="/" v-if="userStore.userData">Home</router-link> |
      <router-link to="/login" v-if="!userStore.userData">Login</router-link> | 
      <router-link to="/register" v-if="!userStore.userData">Register</router-link> 
      <button @click="userStore.logOutUser" v-if="userStore.userData">Logout</button>
    </nav>
    <div v-else>Loading...</div>
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { useUserStore } from './stores/user';
  const userStore = useUserStore();

</script>