<template>
    <div class="home_page min-h-screen">
        <HomeBannerV1 />
        
        <SectionPadding>
            <HomeCategoryv1 />
        </SectionPadding>

        <SectionPadding>
            <div class="container">
                <div class="row">
                    <div class="w-1/2">
                        <div
                            class="rounded-[20px] overflow-hidden bg-[url('/img/cate-bg-1.jpg')] bg-right-top bg-cover bg-no-repeat">
                            <div class="w-2/3 py-16 px-16">
                                <span class="block text-orange-500 text-2xl leading-9 mb-4 font-semibold">Buy 1 Get
                                    1</span>
                                <h3 class="text-[48px] leading-[64px] text-body mb-10 font-bold">Fresh Fruits Collection
                                </h3>
                                <NuxtLink to="/"
                                    class="theme-btn text-orange-500 bg-white hover:bg-primary-700 hover:text-white">
                                    Order Now</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <div
                            class="rounded-[20px] overflow-hidden bg-[url('/img/cate-bg-2.jpg')] bg-right-top bg-cover bg-no-repeat">
                            <div class="w-2/3 py-16 px-16">
                                <span class="block text-orange-500 text-2xl leading-9 mb-4 font-semibold">Buy 1 Get
                                    1</span>
                                <h3 class="text-[48px] leading-[64px] text-body mb-10 font-bold">Fresh Fruits Collection
                                </h3>
                                <NuxtLink to="/"
                                    class="theme-btn text-orange-500 bg-white hover:bg-primary-700 hover:text-white">
                                    Order Now</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionPadding>

        <SectionPadding>
            <HomeDealOfWeek />
        </SectionPadding>

        <SectionPadding>
            <Brands />
        </SectionPadding>

        <SectionPadding>
            <HomeFeturedProduct />
        </SectionPadding>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'default'
})


</script>

<style lang="scss" scoped>

</style>