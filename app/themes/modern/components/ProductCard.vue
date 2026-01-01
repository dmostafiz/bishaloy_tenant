<script setup>
// import ExampleComponent from '~/components/ExampleComponent.vue';

const props = defineProps(['product'])
</script>

<template>
<div>Mordern Theme Product Card Component</div>
<pre>
{{ product }}
</pre>

<ExampleComponent />
</template>
