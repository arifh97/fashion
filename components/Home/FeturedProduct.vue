<template>
    <div class="container">
        <div class="row">
            <div class="w-4/12" v-for="(item, index) in data" :key="item.id">
                <div class="rounded-[20px] py-6 px-5 bg-primary-50 flex justify-between" :class="index == 0 ? 'bg-[#FFF0DC]': '', index == 1 ? 'bg-[#DDF1D6]': '',index == 2 ? 'bg-[#FFEBB7]': '' ">
                    <div class="flex flex-col justify-around pl-6">
                        <h4 class="text-2xl font-bold text-body w-10/12">{{ item.title }}</h4>
                        <NuxtLink to="/"
                            class="transition w-10 h-10 rounded-full bg-white text-orange-400 flex items-center justify-center hover:bg-primary-700 hover:text-white">
                            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                        </NuxtLink>
                    </div>
                    <div class="w-[164px] h-[200px] rounded-2xl">
                        <img :src="item.img" class="w-full h-full object-contain" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data } = await useFetch("/api/featured");

</script>

<style lang="scss" scoped>

</style>