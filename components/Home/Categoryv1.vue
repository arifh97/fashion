<template>
    <div class="category">
        <div class="container">
            <SectionTitle title="Search by Category" :navBtns="true" nextBtn='category-next' prevBtn="category-prev" />
            <swiper :loop="true" :navigation="{nextEl: '#category-next',prevEl: '#category-prev',}" :slides-per-view="6" :space-between="30" :modules="modules" :breakpoints="breakpoints">
                <swiper-slide v-for="(item, index) in data" :key="index">
                    <nuxt-link class="category-item d-block text-center py-9 px-4 rounded-md" to="/" 
                        :class="'block transition bg-[#F7F7F7] hover:bg-[#EBFAEB]'">
                        <div class="category-item-img mx-auto w-24 h-24 relative overflow-hidden">
                            <img :src="item.img" :alt="item.title" class="w-full h-full object-cover absolute top-0 left-0">
                        </div>
                        <p class="text-xl leading-normal text-body font-medium">{{ item.title }}</p>
                    </nuxt-link> 
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>

import {Navigation} from 'swiper'
const modules = [Navigation];
const { data } = await useFetch("/api/category");


const breakpoints ={
    0:{slidesPerView: 2},
    480:{slidesPerView: 3},
    768:{slidesPerView: 4},
    992:{slidesPerView: 5},
    1200:{slidesPerView: 6},
}

</script>

<style lang="scss" scoped>

</style>