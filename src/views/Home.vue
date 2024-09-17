<template>
    <div>
        <h1>Home - {{ userStore.userData }}</h1>
    </div>
</template>

<script setup>
    import {useUserStore} from '../stores/user'
    const userStore = useUserStore()
</script>