<template>
    <div class="container">
        <SectionTitle title="Deals of the Week" :navBtns=true nextBtn='dealNext' prevBtn="dealPrev"></SectionTitle>
        <div class="row">
            <div class="w-full">
                <swiper :loop="false" :navigation="{ nextEl: '#dealNext', prevEl: '#dealPrev' }" :space-between="30"
                    :modules="modules" :breakpoints="breakpoints" :autoplay="false">
                    <swiper-slide v-for="item in data" :key="item">
                        <ProductCard :id='item.id' :title="item.title" :img="item.img" :price="item.price"
                            :discount="item.discount" :rating="item.rating" :categorey="item.categorey"
                            :status="item.status" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script setup>

import { Navigation, Autoplay } from 'swiper'
const modules = [Navigation, Autoplay];

const { data } = await useFetch("/api/dealOffDay");

const breakpoints = {
    0: { slidesPerView: 2 },
    480: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    992: { slidesPerView: 5 }
}
</script>

<style lang="scss" scoped>

</style>