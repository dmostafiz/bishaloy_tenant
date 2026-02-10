<template>
    <div class="min-h-screen bg-theme transition-colors duration-500 pb-10">
        
        <!-- Loading State -->
        <div v-if="pending" class="flex items-center justify-center min-h-[60vh]">
            <div class="relative w-10 h-10">
                <div class="absolute inset-0 border-4 border-primary/10 rounded-full"></div>
                <div class="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error || !product" class="container-app flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
            <div class="w-14 h-14 bg-theme-alt rounded-full flex items-center justify-center mb-4 animate-scale-in">
                <div class="i-lucide-package-search w-7 h-7 text-theme-muted"></div>
            </div>
            <h2 class="text-xl font-heading font-black tracking-tight mb-2">Product Unavailable</h2>
            <p class="text-theme-muted max-w-sm mx-auto mb-6 leading-relaxed text-xs">We couldn't find the product you're looking for or it may be out of stock.</p>
            <NuxtLink to="/shop" class="btn-primary px-6 py-2.5 rounded-full text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-lg">
                Return to Collection
            </NuxtLink>
        </div>

        <!-- Product Presentation -->
        <div v-else class="container-app px-4 pt-4 md:pt-6">
            
            <!-- Dynamic Navigation -->
            <nav class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-theme-muted mb-4 overflow-x-auto no-scrollbar animate-fade-in">
                <NuxtLink to="/" class="hover:text-primary transition-colors">Home</NuxtLink>
                <div class="i-lucide-chevron-right w-2 h-2 opacity-30"></div>
                <NuxtLink to="/shop" class="hover:text-primary transition-colors">Boutique</NuxtLink>
                <div class="i-lucide-chevron-right w-2 h-2 opacity-30"></div>
                <span class="text-theme font-black border-b border-primary/20 pb-0.5 truncate">{{ product.name }}</span>
            </nav>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
                
                <!-- Left: Immersive Visuals -->
                <div class="lg:col-span-7 space-y-3 animate-fade-in-up">
                    <div class="relative group aspect-square bg-[#fdfdfd] dark:bg-[#050505] rounded-xl overflow-hidden border border-theme-light shadow-sm transition-all duration-700">
                        <img :src="activeImage" 
                            class="w-full h-full object-contain p-2 transition-all duration-700 group-hover:scale-105" 
                            :alt="product.name" />
                        
                        <!-- Premium Badges -->
                        <div class="absolute top-3 left-3 flex flex-col gap-1">
                            <div v-if="discountPercentage > 0" class="px-2 py-0.5 bg-red-600 text-white text-[7px] font-black uppercase tracking-widest rounded-full shadow-lg">
                                -{{ discountPercentage }}%
                            </div>
                            <div v-if="isOutOfStock" class="px-2 py-0.5 bg-black/80 text-white text-[7px] font-black uppercase tracking-widest rounded-full shadow-lg">
                                Sold Out
                            </div>
                        </div>

                        <!-- Zoom Indicator -->
                        <div class="absolute bottom-3 right-3 w-7 h-7 bg-white/50 dark:bg-black/50 backdrop-blur-xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-zoom-in">
                            <div class="i-lucide-maximize-2 w-3 h-3 opacity-70"></div>
                        </div>
                    </div>

                    <!-- Refined Thumbnail Matrix -->
                    <div v-if="images.length > 1" class="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                        <button v-for="(img, idx) in images" :key="idx" 
                            @click="activeImage = img"
                            class="flex-shrink-0 w-12 aspect-square bg-theme-alt rounded-lg border-2 overflow-hidden transition-all duration-500 group"
                            :class="activeImage === img ? 'border-primary ring-1 ring-primary/5' : 'border-transparent opacity-60 hover:opacity-100'">
                            <img :src="img" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" :alt="`${product.name} visual ${idx + 1}`" />
                        </button>
                    </div>

                    <!-- Content Blocks (Desktop Left Column) -->
                    <div class="hidden lg:block pt-4 border-t border-theme-light space-y-6">
                        <section class="space-y-3">
                            <div class="flex items-center gap-2">
                                <h3 class="text-[8px] font-black uppercase tracking-[0.3em] text-primary">Details</h3>
                                <div class="h-px flex-1 bg-gradient-to-r from-primary/10 to-transparent"></div>
                            </div>
                            <div class="prose dark:prose-invert max-w-none text-theme-muted font-light leading-snug text-xs" v-html="product.description"></div>
                        </section>

                        <!-- Trust Features Matrix -->
                        <div class="grid grid-cols-2 gap-4 py-4 border-y border-theme-light">
                            <div v-for="feature in trustFeatures" :key="feature.title" class="flex gap-3 group">
                                <div class="w-8 h-8 bg-primary/5 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-500 flex-shrink-0">
                                    <div :class="feature.icon" class="w-4 h-4 text-primary group-hover:text-white transition-colors duration-500"></div>
                                </div>
                                <div>
                                    <h4 class="text-[9px] font-black uppercase tracking-widest mb-0">{{ feature.title }}</h4>
                                    <p class="text-[10px] text-theme-muted leading-tight">{{ feature.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right: Configuration & Sticky Console -->
                <div class="lg:col-span-5 h-auto">
                    <div class="lg:sticky lg:top-4 space-y-5 animate-fade-in-up" style="animation-delay: 0.1s">
                        
                        <!-- Header & Brand -->
                        <div class="space-y-1">
                            <NuxtLink v-if="product.brand?.name" :to="`/brand/${product.brand.slug}`" 
                                class="text-[9px] font-black uppercase tracking-[0.25em] text-primary/80 hover:text-primary transition-colors inline-block">
                                {{ product.brand.name }}
                            </NuxtLink>
                            <h1 class="text-xl lg:text-2xl font-heading font-black tracking-tight text-theme leading-tight">{{ product.name }}</h1>
                            
                            <div class="flex items-center gap-2">
                                <div class="flex gap-0.5 text-amber-500">
                                    <UIcon name="i-lucide-star" class="w-3 h-3 fill-current" />
                                    <UIcon name="i-lucide-star" class="w-3 h-3 fill-current" />
                                    <UIcon name="i-lucide-star" class="w-3 h-3 fill-current" />
                                    <UIcon name="i-lucide-star" class="w-3 h-3 fill-current" />
                                    <UIcon name="i-lucide-star" class="w-3 h-3 opacity-30" />
                                </div>
                                <span class="text-[9px] font-black text-theme lowercase tracking-widest bg-theme-alt px-1.5 py-0.5 rounded border border-theme-light">Curated Excellence</span>
                            </div>
                        </div>

                        <!-- Value Presentation Card -->
                        <div class="relative overflow-hidden p-4 rounded-xl border border-theme-light bg-theme-alt backdrop-blur-xl group">
                            <div class="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                            <div class="relative z-10 flex items-center justify-between">
                                <div class="space-y-0.5">
                                    <span class="text-[8px] font-black uppercase tracking-[0.2em] text-theme/60">Investment</span>
                                    <div class="flex items-baseline gap-2">
                                        <span class="text-2xl font-heading font-black tracking-tighter text-theme">৳{{ currentPrice.toLocaleString() }}</span>
                                        <span v-if="product.compareAtPrice && product.compareAtPrice > currentPrice" 
                                            class="text-xs text-theme-muted/50 line-through decoration-red-500/30 font-bold">
                                            ৳{{ Number(product.compareAtPrice).toLocaleString() }}
                                        </span>
                                    </div>
                                </div>
                                <div v-if="discountPercentage > 0" class="px-2 py-1 bg-primary text-theme-inv text-[8px] font-black rounded border border-white/10 shadow-lg">
                                    -{{ discountPercentage }}%
                                </div>
                            </div>
                        </div>

                        <!-- Parameters Matrix -->
                        <div v-if="attributes.length" class="space-y-4">
                            <div v-for="attr in attributes" :key="attr.name" class="space-y-3">
                                <div class="flex items-center justify-between">
                                    <span class="text-[8px] font-black uppercase tracking-[0.2em] text-theme/60">{{ attr.name }}</span>
                                    <span class="text-[9px] font-bold text-primary">{{ selectedOptions[attr.name] }}</span>
                                </div>
                                <div class="flex flex-wrap gap-2">
                                    <button v-for="val in attr.values" :key="val"
                                        @click="selectOption(attr.name, val)"
                                        class="px-4 py-2 rounded-lg text-[9px] font-bold uppercase tracking-widest border transition-all duration-300 min-w-[3rem]"
                                        :class="selectedOptions[attr.name] === val 
                                            ? 'bg-primary text-theme-inv border-primary shadow-lg shadow-primary/10 scale-[1.05]' 
                                            : 'bg-theme-alt border-theme-light hover:border-primary/30 text-theme/80'">
                                        {{ val }}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Action Console -->
                        <div class="space-y-2 pt-2 border-t border-theme-light/50">
                            <div class="flex gap-2">
                                <!-- Stepper -->
                                <div class="flex items-center bg-theme-alt rounded-lg h-10 px-0.5 border border-theme-light shadow-inner">
                                    <button @click="quantity > 1 ? quantity-- : null" 
                                        class="w-8 h-8 flex items-center justify-center hover:bg-theme rounded-md transition-all disabled:opacity-30"
                                        :disabled="quantity <= 1 || isOutOfStock">
                                        <div class="i-lucide-minus w-3 h-3"></div>
                                    </button>
                                    <input type="number" v-model="quantity" 
                                        class="w-8 h-full text-center bg-transparent font-black focus:outline-none text-theme text-[10px]"
                                        readonly />
                                    <button @click="quantity < currentStock ? quantity++ : null" 
                                        class="w-8 h-8 flex items-center justify-center hover:bg-theme rounded-md transition-all disabled:opacity-30"
                                        :disabled="quantity >= currentStock || isOutOfStock">
                                        <div class="i-lucide-plus w-3 h-3"></div>
                                    </button>
                                </div>

                                <button @click="addToCart" :disabled="isOutOfStock"
                                    class="flex-1 bg-primary text-theme-inv font-black uppercase text-[10px] tracking-widest rounded-lg h-10 shadow-xl shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-40 flex items-center justify-center gap-2">
                                    <UIcon name="i-lucide-shopping-bag" class="w-4 h-4" />
                                    {{ isOutOfStock ? 'Sold Out' : 'Acquire' }}
                                </button>
                            </div>

                            <button @click="orderNow" :disabled="isOutOfStock"
                                class="w-full h-10 rounded-lg bg-black text-white dark:bg-white dark:text-black font-black uppercase text-[10px] tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-40 shadow-lg">
                                <UIcon name="i-lucide-zap" class="w-4 h-4 text-amber-500" />
                                Order Instantly
                            </button>
                            
                            <button @click="orderViaWhatsApp"
                                class="w-full h-10 bg-[#075E54] text-white font-black uppercase text-[9px] tracking-widest rounded-lg hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2 shadow-sm border border-white/5">
                                <UIcon name="i-lucide-message-circle" class="w-4 h-4" />
                                Direct Concierge
                            </button>
                        </div>

                        <!-- Technical Accordion -->
                        <div class="divide-y divide-theme-light border-y border-theme-light bg-theme-alt/20 rounded-lg overflow-hidden">
                            <div v-for="item in accordions" :key="item.id">
                                <button @click="item.isOpen = !item.isOpen" class="w-full px-3 py-2.5 flex items-center justify-between text-left group transition-all duration-300">
                                    <span class="text-[9px] font-black uppercase tracking-[0.1em] text-theme/80">{{ item.title }}</span>
                                    <div class="i-lucide-chevron-down w-3 h-3 text-theme/40 transition-transform duration-500" :class="{ 'rotate-180 text-primary': item.isOpen }"></div>
                                </button>
                                <div v-show="item.isOpen" class="px-3 pb-3 animate-fade-in no-scrollbar">
                                    <template v-if="item.id === 'specs'">
                                        <div class="space-y-1">
                                            <div v-for="(val, key) in (product.specifications || {})" :key="key" 
                                                class="flex justify-between items-center py-1.5 border-b border-theme-light last:border-0">
                                                <span class="text-[8px] font-medium text-theme/50 uppercase tracking-tighter">{{ key }}</span>
                                                <span class="text-[10px] font-black text-theme">{{ val }}</span>
                                            </div>
                                        </div>
                                    </template>
                                    <div v-else class="text-[10px] text-theme/60 leading-tight font-medium" v-html="item.content"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- Mobile Only Description -->
             <div class="lg:hidden mt-6 pt-6 border-t border-theme-light space-y-4">
                 <section class="space-y-3">
                    <h3 class="text-[8px] font-black uppercase tracking-[0.3em] text-primary">Overview</h3>
                    <div class="prose prose-sm dark:prose-invert max-w-none text-theme-muted text-xs leading-snug" v-html="product.description"></div>
                </section>
             </div>

        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const { $axios } = useNuxtApp()

const isPreview = computed(() => route.query.preview === 'true')
const slug = computed(() => Array.isArray(route.params.id) ? route.params.id[0] : route.params.id)

const { data: product, pending, error } = await useAsyncData(`product-${slug.value}`, async () => {
    try {
        const res = await $axios.get(`/catalog/products/slug/${slug.value}`)
        return res.data
    } catch (e) {
        throw createError({ statusCode: 404, statusMessage: 'Product Not Found', fatal: true })
    }
})

// UI State
const accordions = ref([
    { id: 'specs', title: 'Attributes', isOpen: true, content: '' },
    { id: 'shipping', title: 'Shipping', isOpen: false, content: 'Fast delivery on orders over ৳10k.' },
    { id: 'returns', title: 'Returns', isOpen: false, content: '7-day policy for original items.' }
])

const trustFeatures = [
    { title: 'Authentic', desc: 'Direct sourcing.', icon: 'i-lucide-shield-check' },
    { title: 'Logistics', desc: 'Secure delivery.', icon: 'i-lucide-truck' },
    { title: 'Support', desc: 'Direct concierge.', icon: 'i-lucide-headphones' },
    { title: 'Secure Pay', desc: 'Safe processing.', icon: 'i-lucide-lock' }
]

// Images Handling
const images = computed(() => {
    if (!product.value?.productMedias?.length) return []
    const sorted = [...product.value.productMedias].sort((a, b) => {
        if (a.isFeatured === b.isFeatured) return (a.position || 0) - (b.position || 0)
        return a.isFeatured ? -1 : 1
    })
    return sorted.map(pm => pm.media?.url || pm.media?.idUrl || '')
})

const activeImage = ref('')
watchEffect(() => {
    if (images.value?.length > 0 && !activeImage.value) {
        activeImage.value = images.value[0]
    }
})

// Selection Logic
const selectedOptions = ref({})
const quantity = ref(1)
const currentStock = ref(0)
const isCheckingStock = ref(false)

const discountPercentage = computed(() => {
    if (!product.value?.compareAtPrice || !product.value?.price) return 0
    const original = Number(product.value.compareAtPrice)
    const current = Number(product.value.price)
    if (original <= current) return 0
    return Math.round(((original - current) / original) * 100)
})

const attributes = computed(() => {
    if (!product.value?.variants) return []
    const map = new Map()
    product.value.variants.forEach(variant => {
        if (variant.values) {
            variant.values.forEach(val => {
                const attrName = val.attribute?.name
                if (attrName) {
                    if (!map.has(attrName)) map.set(attrName, new Set())
                    map.get(attrName).add(val.value)
                }
            })
        }
    })
    const result = []
    map.forEach((values, name) => {
        result.push({ name, values: Array.from(values) })
    })
    return result
})

watch(() => product.value, (newProduct) => {
    if (newProduct?.variants?.length) {
        let iv = newProduct.variants[0]
        if (newProduct.defaultVariantId) {
            const dv = newProduct.variants.find(v => v.id === newProduct.defaultVariantId)
            if (dv) iv = dv
        }
        const io = {}
        if (iv.values) {
            iv.values.forEach(val => {
                if (val.attribute?.name) io[val.attribute.name] = val.value
            })
        }
        selectedOptions.value = io
    }
}, { immediate: true })

const currentVariant = computed(() => {
    if (!product.value?.variants?.length) return null
    return product.value.variants.find(v => {
        if (!v.values) return false
        return v.values.every(val => selectedOptions.value[val.attribute?.name] === val.value)
    })
})

const currentPrice = computed(() => {
    return Number(currentVariant.value?.price || product.value?.price || 0)
})

const updateStock = async (vId) => {
    if (!vId) return
    isCheckingStock.value = true
    try {
        const res = await $axios.get(`/catalog/products/variants/${vId}/stock`)
        currentStock.value = Number(res.data?.stockQuantity || 0)
    } catch (e) {
        currentStock.value = Number(currentVariant.value?.stockQuantity || 0)
    } finally {
        isCheckingStock.value = false
    }
}

watch(() => currentVariant.value, (nv) => {
    updateStock(nv?.id)
    if (nv?.media?.url || nv?.media?.idUrl) {
        activeImage.value = nv.media.url || nv.media.idUrl
    }
}, { immediate: true })

const selectOption = (k, v) => selectedOptions.value = { ...selectedOptions.value, [k]: v }

const addToCart = () => console.log('Cart:', { id: product.value.id, variant: currentVariant.value?.id, qty: quantity.value })
const orderNow = () => console.log('Order:', { id: product.value.id, variant: currentVariant.value?.id, qty: quantity.value })

const orderViaWhatsApp = () => {
    const phone = "8801700000000" 
    const variantStr = Object.entries(selectedOptions.value).map(([k, v]) => `${k}: ${v}`).join(', ')
    const message = `Inquiry:\nProduct: ${product.value.name}\nOptions: ${variantStr}\nReference: ${window.location.href}`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
}

const isOutOfStock = computed(() => !isCheckingStock.value && (currentStock.value <= 0 || product.value?.status === 'OUT_OF_STOCK'))

useHead({
    title: computed(() => `${product.value?.name || 'Product'} | StoreZet`),
    meta: [{ name: 'description', content: computed(() => product.value?.shortDescription || '') }]
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

@keyframes fade-in {
    from { opacity: 0; filter: blur(3px); }
    to { opacity: 1; filter: blur(0); }
}

@keyframes fade-in-up {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes scale-in {
    from { opacity: 0; transform: scale(0.98); }
    to { opacity: 1; transform: scale(1); }
}

.animate-fade-in {
    animation: fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in-up {
    animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-scale-in {
    animation: scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.prose :deep(p) {
    margin-bottom: 0.5rem;
}
</style>

