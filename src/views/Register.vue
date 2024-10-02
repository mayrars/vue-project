<template>
    <a-row>
        <a-col :xs="{span:24}" :sm="{span:12, offset:6}" :md="{span:12, offset:6}" :lg="{span:12, offset:6}" :xl="{span:12, offset:6}">
            <h1>Register</h1>

            <a-form-item 
                name="email"
                label="Ingrese email"
            >
                <a-input v-model:value="formState.email" placeholder="" />
            </a-form-item>
            <a-form-item 
                name="password" 
                label="Ingrese contraseña" 
                :rules="[
                    { 
                        required: true, 
                        min: 6,
                        whiteSpace: true,
                        message: 'Ingresa una contraseña con minimo 6 caracteres' 
                    }
                ]"
            >
                <a-input-password v-model:value="formState.password"/>
            </a-form-item>
            <a-form-item
                name="repassword"
                label="Repita la contraseña"
                :rules="[
                    {
                        required: true, 
                        min: 6,
                        whiteSpace: true
                    }
                ]"  
            >
                <a-input-password v-model:value="formState.repassword"/>
            </a-form-item>
        </a-col>
    </a-row>
</template>

<script setup>
    import { reactive } from 'vue'
    import { useUserStore } from '../stores/user';

    const userStore = useUserStore()
    const formState = reactive({
        email: '',
        password: ''
    })
    const handleSubmit = async() => {
        if(!email.value || password.value.length<6) {
            return alert('Campos vacios')
        }
        await userStore.registerUser(email.value, password.value)
    }
</script>