<script setup>
// import ExampleComponent from '~/components/ExampleComponent.vue';

const props = defineProps(['product'])
</script>

<template>
<div>Default Product Card Component</div>
<pre>
{{ product }}
</pre>

<ExampleComponent />
</template>
