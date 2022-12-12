<template>
    <ClientOnly>
        <i :class="props.class">
            <icon :icon="props.icon" />
        </i>
    </ClientOnly>
</template>

<script setup>
const props = defineProps(['icon', 'class'])
</script>
