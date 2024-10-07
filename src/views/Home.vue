<template>
    <div>
        <h1>Home </h1>
        <p>{{ userStore.userData?.email }}</p>
        <add-form />
        <p v-if="databaseStore.loadingDoc">loading docs...</p>
        <ul class="lista" v-else>
            <li v-for="item in databaseStore.documents" :key="item.id">
                {{ item.id }} 
                <br> 
                {{ item.name }}
                <br>
                {{ item.short }}
                <button @click="databaseStore.deleteUrl(item.id)">Eliminar</button>
                <button @click="router.push(`/edit/${item.id}`)">Editar</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'; 
import { useDatabaseStore } from '../stores/database';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const databaseStore = useDatabaseStore();
const router = useRouter();

databaseStore.getUrls()

const url = ref('')

const handleSubmit = () => {
    //Validaciòn de la url
    databaseStore.addUrl(url.value)
}
</script>