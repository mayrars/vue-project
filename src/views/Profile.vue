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
                <a-upload
                    v-model:file-list="fileList"
                    list-type="picture"
                    :before-upload="beforeUpload"
                    :max-count="1"
                    @change="handleChange"
                >
                    <a-button>Subir foto de perfil</a-button>
                </a-upload> 
                <a-form-item style="margin-top: 20px">
                    <a-button type="primary" html-type="submit" :loading="userStore.loadingUser" :disabled="userStore.loadingUser">Actualizar informaciòn</a-button>
                </a-form-item>
            </a-form>
        </a-col>    
    </a-row>
</template>

<script setup>
    import { message } from 'ant-design-vue';
    import { useUserStore } from '../stores/user';
    import { ref } from 'vue';

    const userStore = useUserStore()
    const fileList= ref([])

    const beforeUpload = (file) => {
        fileList.value = [...fileList.value, file]
        return false
    }

    const handleRemove = file =>{
        const indez = fileList.value.indexOf(file)
        const newFileList = fileList.value.slice()
        newFileList.splice(indez, 1)
        fileList.value = newFileList
    }

    const handleChange = (info) => {
        if(info.file.status!=='uploading'){
            const isJpgOrPng = info.file.type === 'image/jpeg' || info.file.type === 'image/png';
            if (!isJpgOrPng) {
                message.error('Solo imagenes JPG o png!');
                handleRemove(info.file)
                return;
            }
            const isLt2M = info.file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                message.error('Màximo 2MB!');
                handleRemove(info.file)
                return;
            }
        }        

        let resFileList = [...info.fileList]

        resFileList = resFileList.slice(-1)

        resFileList = resFileList.map(file => {
            if (file.response) {
                file.url = file.response.url;
            }
            return file;
        })
        fileList.value = resFileList
    }
    const onFinish = async(values) => {
        const error = await userStore.updateUser(userStore.userData.displayName)

        fileList.value.forEach(file => {
            console.log(file)
        })

        if(!error){
            message.success("Se actualizo tu informaciòn correctamente")
        }else{
            message.error("No se pudo actualizar tu informaciòn")
        }
    }
</script>