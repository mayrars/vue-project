<script setup>
    import { reactive } from 'vue'
    const formState = reactive({
        url: ''
    })
    const onFinish = async(values) => {
        console.log('Success:', values);
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
            name="url"
            label="ingrese una URL"
            :rules="[
                {
                    required: true,
                    whitespace: true,
                    pattern=/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                    message: 'Por favor ingrese una URL correcta'
                }
            ]"
        ></a-form-item>
        <a-form-item></a-form-item>
    </a-form>
</template>
