<template>
    <ClientOnly>
        <div class="mx-12">
            <swiper :loop="true" :pagination="{clickable: true}" :slide-per-view="1" :modules="modules">
                <swiper-slide v-for="item in 3" :key="item">
                    <div
                        class="banner bg-primary-50 rounded-[30px] min-h-[876px] pt-[60px] px-36 flex flex-col justify-center">
                        <div class="container-fluid">
                            <div class="row justify-between items-center">
                                <div class="w-6/12">
                                    <span class="text-3xl block text-primary-700 mb-5">Save up 30% off</span>
                                    <h1 class="text-[70px] font-bold text-[#333333] leading-[90px] mb-7">Bengal
                                        Vegetable
                                        farm Organic 100%</h1>
                                    <p class="mb-10 font-medium text-xl text-[#4F4F4F]">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Vehicula faucibus massa est elit maecenas.</p>
                                    <NuxtLink to="/"
                                        class="theme-btn">
                                        Shop Now</NuxtLink>
                                </div>
                                <div class="w-6/12">
                                    <div class="w-[660px] h-[820px] ml-auto">
                                        <img src="@/assets/img/banner-1.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </ClientOnly>

</template>

<script setup>
import {
    Pagination
} from "swiper";
const modules = [Pagination];
</script>

<style lang="scss" scoped>

</style>