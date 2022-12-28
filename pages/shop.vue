<template>
    <SectionPadding>
        <div class="container">
            <div class="row" v-if="shop.length">
                <div class="w-4/12" v-for="item in shop" :key="item">
                    <ProductCard class="mb-10" :id="item.id" :title="item.title" :img="item.img" :status="item.status" :discount="item.discount" :price="item.price" :rating="item.rating" :categorey="item.categorey"></ProductCard>
                </div>
            </div>
            <div class="row" v-else>
                <div class="w-full text-center">
                    <h1 class="text-5xl font-bold font-mono text-red-400">no data found!</h1>
                </div>
            </div>
        </div>
    </SectionPadding>
</template>

<script setup>
    const getSearchValue = computed(() => useRoute().query.search ? useRoute().query.search : '');
    const { data } = useFetch('/api/product');
    const shop = computed(() => {
        return data.value.filter((e) => e.title.toLowerCase().includes(getSearchValue.value.toLowerCase()));
    })
</script>

<style lang="scss" scoped>

</style>