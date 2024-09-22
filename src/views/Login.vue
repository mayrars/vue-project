<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" name="email" placeholder="Ingrese email" v-model.trim="email" />
            <input type="password" placeholder="Ingrese contraseña" v-model.trim="password" />
            <button type="submit" :disabled="userStore.loadingUser">Acceso</button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useUserStore } from '../stores/user'; 

    const userStore = useUserStore()

    const email = ref('')
    const password = ref('')
    const handleSubmit = async() => {
        if(!email.value || password.value.length < 6) {
            return alert('Campos vacios')
        }
        await userStore.loginUser(email.value, password.value)
    }
</script>