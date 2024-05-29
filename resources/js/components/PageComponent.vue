<template>
    <main>
        <div class="mx-auto max-w-[60rem] pt-2 lg:pt-28">
            <slot></slot>
        </div>
    </main>
</template>

<script setup>
const props = defineProps({
    title: String
})
</script>