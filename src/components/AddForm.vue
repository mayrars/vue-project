<script setup>
    import { reactive } from 'vue'
    import { useDatabaseStore } from '../stores/database';
    import { message } from 'ant-design-vue';
    const databaseStore = useDatabaseStore();
    databaseStore.getUrls()
    const formState = reactive({
        url: ''
    })
    const onFinish = async(values) => {
        const error = await databaseStore.addUrl(formState.url)
        if(!error){
            formState.url = ''
            return message.success('URL agregada correctamente')
        }

        switch(error){
            default:
                message.error("Error desconocido")
                break;
        }
    }
</script>
<template>
    <a-form 
        name="addForm"
        autocomplete="off"
        layout="vertical"
        :model="formState"
        @finish="onFinish"
    >
        <a-form-item
            label="Ingrese URL"
            name="url"
            :rules="[
                {
                    required: true,
                    whitespace: true,
                    pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                    message: 'Ingresa una URL válida',
                },
            ]"
        >
            <a-input
                v-model:value="formState.url"
                placeholder="https://www.google.com"
            />
        </a-form-item>
        <a-form-item>
            <a-button
                type="primary"
                html-type="submit"
            >Agregar URL</a-button>
        </a-form-item>
    </a-form>
</template>
