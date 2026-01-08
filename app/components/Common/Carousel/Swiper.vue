<template>
    <ClientOnly>
        <swiper-container class="w-full h-full" ref="containerRef" :init="false">
            <swiper-slide v-for="(slide, idx) in props.slides" :key="idx" :style="{
                'background-color': slide?.bgColor!,
                'background-image': slide?.bgImageUrl!,
                'color': 'white',
                'height': '100%'
            }" class="h-full">
                {{ slide.title }}
            </swiper-slide>
        </swiper-container>
    </ClientOnly>
</template>

<script setup lang="ts">
const containerRef = ref(null)
import type { SwiperOptions } from 'swiper/types'
import type { PropType } from 'vue'

interface Slide {
    id: number
    bgImageUrl?: string | null,
    bgColor?: string | null,
    imageUrl?: string | null,
    title?: string | null,
    subTitle?: string | null,
    productId?: string | null
}

const props = defineProps({
    slides: {
        type: Array as PropType<Slide[]>,
        required: true,
    },
    options: {
        type: Object as PropType<SwiperOptions>,
        default: () => ({}),
    }
})


const swiper = useSwiper(containerRef, {
    ...(props.options ?? {}),
    // effect: 'creative',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            shadow: true,
            translate: [0, 0, -400],
        },
    },
})

onMounted(() => {
    console.log(swiper.instance)
})
</script>

<style lang="css">
swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    height: 20vh;
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
}
</style>
