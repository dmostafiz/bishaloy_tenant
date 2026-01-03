import { ref, computed } from 'vue'
import type { BuilderComponent } from '../../types/builder'

export const useBuilder = () => {
  const components = ref<BuilderComponent[]>([])
  const selectedId = ref<number | null>(null)
  const viewport = ref<'desktop' | 'tablet' | 'mobile'>('desktop')
  const mode = ref<'edit' | 'preview'>('edit')
  const showCode = ref(false)

  const history = ref<BuilderComponent[][]>([[]])
  const historyIndex = ref(0)
  const expanded = ref<Record<number, boolean>>({})

  const genId = () => Date.now() + Math.random()

  const saveHistory = (c: BuilderComponent[]) => {
    history.value = history.value.slice(0, historyIndex.value + 1)
    history.value.push(JSON.parse(JSON.stringify(c)))
    historyIndex.value++
  }

  const undo = () => {
    if (historyIndex.value > 0) {
      historyIndex.value--
      components.value = JSON.parse(JSON.stringify(history.value[historyIndex.value]))
    }
  }

  const redo = () => {
    if (historyIndex.value < history.value.length - 1) {
      historyIndex.value++
      components.value = JSON.parse(JSON.stringify(history.value[historyIndex.value]))
    }
  }

  const viewportWidth = computed(() => {
    if (viewport.value === 'mobile') return '375px'
    if (viewport.value === 'tablet') return '768px'
    return '100%'
  })

  return {
    components,
    selectedId,
    viewport,
    mode,
    showCode,
    expanded,
    viewportWidth,
    saveHistory,
    undo,
    redo,
    genId,
  }
}
