<template>
    <a-row>
        <a-col :xs="{span:24}" :sm="{span:12, offset:6}" :md="{span:12, offset:6}" :lg="{span:12, offset:6}" :xl="{span:12, offset:6}">
            <h1>Login</h1>
            <a-form 
                name="basicLogin" 
                autocomplete="off" 
                layout="vertical"
                :model="formState"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
                <a-form-item 
                    name="email" 
                    label="Ingresa tu correo" 
                    :rules="[
                        { 
                            required: true, 
                            whitespace: true, 
                            type: 'email',
                            message: 'Ingresa un correo vàlido' 
                        }
                    ]"
                >
                    <a-input v-model:value="formState.email"></a-input>
                </a-form-item>
                <a-form-item
                    label="Ingrese contraseña"
                    name="password"
                    :rules="[{ required: true, min: 6, whitespace: true, message: 'Ingresa una contraseña con minimo 6 caracteres' }]"
                >
                    <a-input-password v-model:value="formState.password" />
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" :disabled="userStore.loadingUser">Acceso</a-button>
                </a-form-item>
            </a-form>
        </a-col>    
    </a-row>
</template>

<script setup>
    import { reactive } from 'vue'
    import { useUserStore } from '../stores/user'; 
    import { message } from 'ant-design-vue';

    const userStore = useUserStore()

    const formState = reactive({
        email: '',
        password: ''
    })

    const onFinish = async (values) => {
        console.log('Success:', values);
        const error = await userStore.loginUser(formState.email, formState.password)
        if(!error){
            return 
        }
        console.log(error)
        switch(error){
            case "auth/wrong-password":
                message.error("Contraseña incorrecta")
                break;
            case "auth/user-not-found":
                message.error("El usuario no existe")
                break;
            case "auth/invalid-credential":
                message.error("Error en el correo o contraseña")
                break;
            default:
                message.error("Error desconocido")
                break;
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
</script>