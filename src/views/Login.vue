<template>
    <a-row>
        <a-col :xs="{span:24}" :sm="{span:12, offset:6}" :md="{span:12, offset:6}" :lg="{span:12, offset:6}" :xl="{span:12, offset:6}">
            <h1>Login</h1>
            <a-form 
                name="basicLogin" 
                autocomplete="off" 
                layout="vertical"
                @submit.prevent="handleSubmit"
            >
                <a-form-item 
                    name="email" 
                    label="Ingresa tu correo" 
                    :rules="[{ required: true, message: 'Ingresa tu correo' }]"
                >
                    <a-input v-model:value="email"></a-input>
                </a-form-item>
                <a-form-item
                    label="Ingrese contraseña"
                    name="password"
                    :rules="[{ required: true, message: 'Ingresa una contraseña' }]"
                >
                    <a-input-password v-model:value="password" />
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" :disabled="userStore.loadingUser">Acceso</a-button>
                </a-form-item>
            </a-form>
        </a-col>    
    </a-row>
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