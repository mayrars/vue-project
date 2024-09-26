<template>
    <div>
        <h1>Editar</h1>
        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Ingrese la URL" v-model="url">
            <button type="submit">Editar</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useDatabaseStore } from '../stores/database';
const route = useRoute();
const databaseStore = useDatabaseStore();

const handleSubmit= ()=> {
    
}

const url = ref('')
onMounted(async()=>{
    url.value = await databaseStore.readUrl(route.params.id)
})
</script>