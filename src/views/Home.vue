<template>
    <div>
        <h1>Home </h1>
        <p>{{ userStore.userData?.email }}</p>
        <p v-if="databaseStore.loadingDoc">loading docs...</p>
        <ul v-else>
            <li v-for="item in databaseStore.documents" :key="item.id">
                {{ item.id }} 
                <br> 
                {{ item.name }}
                <br>
                {{ item.short }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'; 
import { useDatabaseStore } from '../stores/database';

const userStore = useUserStore();
const databaseStore = useDatabaseStore();

databaseStore.getUrls()
</script>