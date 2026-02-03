<template>
    <section class="container mx-auto px-4 py-12">
        <div class="text-center mb-10">
            <h2 class="text-3xl font-bold text-theme mb-3">{{ title }}</h2>
            <p v-if="subtitle" class="text-theme-muted">{{ subtitle }}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <DefaultCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </section>
</template>

<script setup>
import DefaultCard from '~/CustomComponents/Product/GridCards/DefaultCard.vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Our Products'
    },
    subtitle: {
        type: String,
        default: ''
    },
    products: {
        type: Array,
        default: () => []
    }
})
</script>
