<template>
    <h1>Editar</h1>
    <a-form 
        name="editForm"
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
            >Editar</a-button>
        </a-form-item>
    </a-form>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router';
import { useDatabaseStore } from '../stores/database';
import { message } from 'ant-design-vue';

const formState = reactive({
    url: ''
})
const route = useRoute();
const databaseStore = useDatabaseStore();

const onFinish = async(values) => {
    const error = await databaseStore.updateUrl(route.params.id, formState.url)
    if(!error){
        formState.url = ''
        return message.success('URL editada correctamente')
    }

    switch(error){
        default:
            message.error("Error desconocido")
            break;
    }
}
onMounted(async()=>{
    formState.url = await databaseStore.readUrl(route.params.id)
})
</script>