<template>
    <div>
        <h1>Courses page</h1>
    </div>
</template>

<script setup>
    const getSearchValue = computed(() => useRoute().query.search ? useRoute().query.search : '');
    const data = ref([]);
    onMounted(() => {
        useFetch('/api/product').then((res) => {
            data.value = res.data;
        })
    })
    const product = computed(() => {
        return data.filter((post) => post.title.toLowerCase().includes(getSearchValue.value.toLowerCase()))
    })
</script>

<style lang="scss" scoped>

</style>