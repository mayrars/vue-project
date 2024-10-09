<template>
  <a-layout>
    <a-layout-header v-if="!userStore.loadingSession">
      <a-menu 
        theme="dark" 
        mode="horizontal" 
        :style="{ lineHeight: '64px'}" 
        v-model:selectedKeys="selectedKeys"
      >
        <a-menu-item key="home" v-if="userStore.userData">
          <router-link to="/" >Home</router-link>
        </a-menu-item>
        <a-menu-item key="profile" v-if="userStore.userData">
          <router-link to="/profile" >Perfil</router-link>
        </a-menu-item>
        <a-menu-item key="login" v-if="!userStore.userData">
          <router-link to="/login" >Login</router-link>
        </a-menu-item>
        <a-menu-item key="register" v-if="!userStore.userData">
          <router-link to="/register">Register</router-link> 
        </a-menu-item>
        <a-menu-item key="logout" @click="userStore.logOutUser" v-if="userStore.userData">
          Logout
        </a-menu-item>
      </a-menu>
      <nav >
        
        
        
        
      </nav>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div class="container">
        <div v-if="userStore.loadingSession">Loading...</div>
        <router-view></router-view>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script setup>
  import { ref, watch } from 'vue';
  import { useUserStore } from './stores/user';
  import { useRoute } from 'vue-router'

  const userStore = useUserStore();
  const route = useRoute()
  const selectedKeys = ref(['login']);
  watch(()=>route.name,()=>selectedKeys.value = [route.name])

</script>
<style>
.container{
  background: #fff;
  padding: 24px;
  min-height: calc(100vh - 64px);
}
</style>