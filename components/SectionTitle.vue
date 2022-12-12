<template>
    <div class="row">
        <div class="w-full">
            <div class="border-b-2 border-solid border-[#E0E0E0] mb-10">
                <div class="flex items-center justify-between">
                    <h2
                        class="mb-0 font-semibold text-4xl leading-normal text-body relative pb-6 before:absolute before:bg-primary-700 before:left-0 before:bottom-[-3px] before:w-[110px] before:h-[4px] before:rounded-full">
                        {{ sectiontitle.title }}</h2>
                    <div class="flex items-center gap-2" v-if="sectiontitle.navBtns">
                        <button :id="sectiontitle.prevBtn" class="w-12 h-12 rounded-full bg-[#F2F2F2] text-[#999999] flex items-center justify-center transition hover:bg-primary-700 hover:text-white">
                            <font-awesome-icon icon="fa-solid fa-angle-left" />
                        </button>
                        <button :id="sectiontitle.nextBtn" class="w-12 h-12 rounded-full bg-[#F2F2F2] text-[#999999] flex items-center justify-center transition hover:bg-primary-700 hover:text-white">
                            <font-awesome-icon icon="fa-solid fa-angle-right" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// const sectiontitle = defineProps(['title', 'navBtns', 'nextBtn', 'prevBtn']);
const sectiontitle = defineProps({
    title:{type: String, required: true},
    navBtns: {type:Boolean, required: true},
    nextBtn: String,
    prevBtn: String,

});
</script>

<style lang="scss" scoped>

</style>