<template>
    <div class="container">
        <div class="flex items-center justify-center gap-3">
            <button @click="counter.decrement()"
                class="text-lg font-medium text-primary-700 bg-primary-50 rounded-full w-8 h-8 flex items-center justify-center">-</button>
            <span class="text-lg font-bold">{{ counter.$state.count }}</span>
            <button @click="counter.increment()"
                class="text-lg font-medium text-primary-700 bg-primary-50 rounded-full w-8 h-8 flex items-center justify-center">+</button>
        </div>
    </div>
</template>

<script setup>
import { useCounter } from '~~/stores/counter';
const counter = useCounter();
</script>

<style lang="scss" scoped>

</style>