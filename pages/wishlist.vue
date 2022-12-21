<template>
    <div class="py-24">
        <div class="container">
            <div class="row">
                <div class="w-4/12" v-for="props in data">
                    <div class="group product-card">
                        <div class="w-full overflow-hidden relative rounded pb-[100%]">
                            <div class="block bg-black text-white py-1 px-3 rounded absolute top-2 text-sm left-2 capitalize z-10"
                                v-if="props.discount != 0">-{{ props.discount }}%</div>
                            <div class="block text-white py-1 px-3 rounded absolute top-2 right-2 text-sm capitalize z-10"
                                :class="props.status == 'out of stock' ? 'bg-red-500' : 'bg-orange-400'">{{ props.status }}</div>
                            <NuxtLink to="/" class="absolute top-0 left-0 w-full h-full">
                                <img :src="props.img" class="w-full h-full object-cover" alt="">
                            </NuxtLink>
                            <div
                                class="absolute flex-col top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                                <add-to-cart :cart-data="props" />
                                <NuxtLink to="/" class="absolute left-0 bottom-0 text-center py-2 bg-[#F2F2F2] w-full">
                                    Details <font-awesome-icon icon="fa-solid fa-arrow-right" />
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="mt-5 text-center">
                            <span class="text-sm leading-normal text-[#BDBDBD] mb-2 block capitalize">{{ props.categorey }}</span>
                            <div class="flex justify-center mb-3">
                                <div class="text-orange-300">
                                    <font-awesome-icon v-for="item in 5" :key="item" class="mr-1" icon="fa-solid fa-star" />
                                </div>
                                <span class="inline-block ml-2">({{ props.rating }})</span>
                            </div>
                            <NuxtLink to="/"
                                class="text-xl font-medium leading-[30px] text-body transition hover:text-primary-700 mb-4 block">
                                {{ props.title }}
                            </NuxtLink>
                            <div>
                                <strong class="font-medium text-orange-500 text-xl">${{ props.price - props.price * props.discount / 100
                                }}</strong>
                                <del class="inline-block ml-3 text-lg text-[#BDBDBD]" v-if="props.discount != 0">${{ props.price }}</del>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    const data = ref([]);
    onMounted(() => {
        const getItem = window.localStorage.getItem('wishlist');
        data.value = (JSON.parse(getItem))
    })

</script>

<style lang="scss" scoped>

</style>