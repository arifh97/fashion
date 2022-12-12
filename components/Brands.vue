<template>
    <div class="brands">
        <div class="container">
            <SectionTitle title="Popular Brands" :nav-btns=true nextBtn="brandNext" prevBtn="brandPrev" />
            <div class="row">
                <div class="w-full">
                    <swiper :loop="true" slides-per-view="6" :modules="modules" :navigation="{nextEl:'#brandNext', prevEl:'#brandPrev'}" :breakpoints="breakpoints" :autoplay="{delay: 3000,}">
                        <swiper-slide v-for="brand in data">
                            <NuxtLink to="/" class="block w-[184px] h-[95px]" target="_blank">
                                <img :src="brand.img" class="w-full h-full object-contain" alt="">
                            </NuxtLink>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {Navigation, Autoplay} from 'swiper'
const modules = [Navigation, Autoplay];
const breakpoints ={
    0:{slidesPerView: 2},
    480:{slidesPerView: 3},
    768:{slidesPerView: 4},
    992:{slidesPerView: 5},
    1200:{slidesPerView: 7},
}
const { data } = await useFetch("/api/brands");
</script>

<style lang="scss" scoped>

</style>