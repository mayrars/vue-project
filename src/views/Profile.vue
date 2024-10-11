<template>
    <a-row>
        <a-col :xs="{span:24}" :sm="{span:12, offset:6}" :md="{span:12, offset:6}" :lg="{span:12, offset:6}" :xl="{span:12, offset:6}">

            <h1>Perfil de usuario</h1>
            <a-form 
                name="basicProfile" 
                autocomplete="off" 
                layout="vertical"
                :model="userStore.userData"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
                <a-form-item 
                    name="email" 
                    label="Correo (No modificable)" 
                    :rules="[
                        { 
                            required: true, 
                            whitespace: true, 
                            type: 'email',
                            message: 'Ingresa un correo vàlido' 
                        }
                    ]"
                >
                    <a-input disabled v-model:value="userStore.userData.email"></a-input>
                </a-form-item>    
                <a-form-item 
                    name="displayName" 
                    label="Ingresa su Nickname" 
                    :rules="[
                        { 
                            required: true, 
                            whitespace: true, 
                            message: 'Ingresa un nick vàlido' 
                        }
                    ]"
                >
                    <a-input v-model:value="userStore.userData.displayName"></a-input>
                </a-form-item>    
                <a-form-item>
                    <a-button type="primary" html-type="submit" :loading="userStore.loadingUser" :disabled="userStore.loadingUser">Actualizar informaciòn</a-button>
                </a-form-item>
            </a-form>
        </a-col>    
    </a-row>
</template>

<script setup>
    import { message } from 'ant-design-vue';
    import { useUserStore } from '../stores/user';

    const userStore = useUserStore()
    const onFinish = async(values) => {
        const error = await userStore.updateUser(userStore.userData.displayName)
        if(!error){
            message.success("Se actualizo tu informaciòn correctamente")
        }else{
            message.error("No se pudo actualizar tu informaciòn")
        }
    }
</script>