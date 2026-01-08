<template>
  <div class="w-full h-full">
    <CommonCarouselSwiper :slides="slides" :options="{effect: 'fade'}" />
  </div>
</template>

<script lang="ts" setup>
const slides = [
  {
    id: 1,
    bgImageUrl: "",
    productId: null,
    title: "Slider One",
    subTitle: "You are viewing slider 1",
    bgColor: 'red'
  },
    {
    id: 2,
    bgImageUrl: "",
    productId: null,
    title: "Slider Two",
    subTitle: "You are viewing slider 2",
    bgColor: 'black'
  },

      {
    id: 3,
    bgImageUrl: "",
    productId: null,
    title: "Slider Three",
    subTitle: "You are viewing slider 3",
    bgColor: 'green'
  },
]
</script>

<style></style>