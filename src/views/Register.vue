<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" name="email" placeholder="Ingrese email" v-model.trim="email">
            <input type="password" name="password" placeholder="Ingrese contraseña" v-model.trim="password">
            <button type="submit">Crear usuario</button>
        </form>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import { useUserStore } from '../stores/user'; 

    const userStore = useUserStore()

    const email = ref('')
    const password = ref('')
    const handleSubmit = () => {
        if(!email.value || password.value.length<6) {
            return alert('Campos vacios')
        }
        userStore.registerUser(email.value, password.value)
    }
</script>