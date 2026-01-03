<script setup lang="ts">
import { useBuilder } from '@/composables/useBuilder'
import type { BuilderComponent } from '../../../types/builder'

const props = defineProps<{ component: BuilderComponent }>()
const { selectedId, mode } = useBuilder()
</script>

<template>
    <div class="relative" :class="mode === 'edit' && selectedId === component.id
        ? ' outline-2 outline-blue-500'
        : ' outline-1 outline-dashed outline-gray-300'" @click.stop="selectedId = component.id">
        <p v-if="component.type === 'text'"
            :style="{ color: component.props.color, fontSize: component.props.fontSize }">
            {{ component.props.content }}
        </p>

        <div v-else-if="component.type === 'container'"
            :style="{ padding: component.props.padding, background: component.props.bg }">
            <BuilderRenderer v-for="ch in component.props.children || []" :key="ch.id" :component="ch" />
        </div>
    </div>
</template>
