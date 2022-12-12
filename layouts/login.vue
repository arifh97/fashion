<template>
    <slot />
</template>


<script setup>
    
    onMounted(() => {
        let token = window.localStorage.getItem('token')
        if(!token){
            navigateTo('/login')
        } else{
            navigateTo('/')
        }
    })

</script>