<template>
    <div class="min-h-screen bg-theme text-theme pb-20 selection:bg-primary/10 transition-colors duration-500">
        <!-- Preview Banner -->
        <div v-if="isPreview"
            class="bg-black text-white py-3 text-center text-sm font-bold uppercase tracking-wider sticky top-0 z-[100] shadow-md">
            Preview Mode
        </div>

        <div v-if="pending" class="flex items-center justify-center min-h-[60vh]">
            <div class="w-10 h-10 border-2 border-theme-light border-t-primary rounded-full animate-spin"></div>
        </div>

        <div v-else-if="error || !product"
            class="flex flex-col items-center justify-center min-h-[70vh] px-4 animate-fade-in-up">
            <div class="w-20 h-20 bg-theme-alt rounded-full flex items-center justify-center mb-8 border border-theme-light shadow-inner">
                <svg class="w-8 h-8 text-theme-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h2 class="text-3xl font-bold mb-4 tracking-tight text-theme">Item Not Found</h2>
            <p class="text-theme-muted mb-8 max-w-xs text-center">The product you are looking for might have been archived or moved.</p>
            <NuxtLink to="/shop"
                class="btn-primary px-10 py-4 rounded-xl text-sm font-bold uppercase tracking-widest shadow-xl hover:shadow-primary/20 transition-all active:scale-95">
                Back to Shop</NuxtLink>
        </div>

        <div v-else class="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6 animate-fade-in">
            <!-- Breadcrumbs (Premium Style) -->
            <nav class="flex items-center text-[13px] text-theme-muted mb-8 transition-colors">
                <NuxtLink to="/" class="hover:text-primary transition-colors">Home</NuxtLink>
                <span class="mx-3 opacity-20">/</span>
                <NuxtLink to="/shop" class="hover:text-primary transition-colors">Shop</NuxtLink>
                <span class="mx-3 opacity-20">/</span>
                <span class="text-theme font-semibold">{{ product?.name }}</span>
            </nav>

            <!-- Main Layout: 2-Column High-Definition Split -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                <!-- Left Column: Gallery Exhibit (7/12) -->
                <div class="lg:col-span-7">
                    <div class="flex flex-col md:flex-row gap-6 sticky top-6">
                        <!-- Vertical Thumbnails (Desktop) -->
                        <div v-if="images.length > 1" class="hidden md:flex flex-col gap-3 order-2 md:order-1">
                            <button v-for="(img, index) in images" :key="index" 
                                @mouseenter="activeImage = img"
                                @click="activeImage = img"
                                class="w-16 aspect-square rounded-lg border transition-all overflow-hidden bg-theme-alt p-1"
                                :class="activeImage === img ? 'border-primary ring-2 ring-primary/20' : 'border-theme-light hover:border-theme'">
                                <img :src="img" class="w-full h-full object-cover rounded-md">
                            </button>
                        </div>

                        <!-- Main Display Canvas -->
                        <div class="flex-1 order-1 md:order-2">
                            <div class="relative aspect-square bg-theme-alt rounded-2xl border border-theme-light overflow-hidden group cursor-zoom-in shadow-theme-lg"
                                @mousemove="handleZoom" @mouseleave="resetZoom" @click="toggleFullscreen">
                                <img :src="activeImage" :alt="product.name"
                                    class="w-full h-full object-cover transition-transform duration-500 ease-out"
                                    :style="zoomStyle">
                                
                                <!-- Visual Overlay -->
                                <div class="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 dark:ring-white/5"></div>
                                
                                <div class="absolute bottom-6 right-6 bg-theme-alt/90 backdrop-blur rounded-xl p-3 border border-theme-light opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                    <svg class="w-6 h-6 text-theme-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                                </div>
                            </div>
                            <!-- Mobile Gallery Strip -->
                            <div v-if="images.length > 1" class="flex md:hidden gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                                <button v-for="(img, index) in images" :key="index" @click="activeImage = img"
                                    class="w-20 aspect-square rounded-lg border flex-shrink-0 bg-theme-alt p-1"
                                    :class="activeImage === img ? 'border-primary ring-2 ring-primary/20' : 'border-theme-light'">
                                    <img :src="img" class="w-full h-full object-cover rounded-md">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Unified Professional Sidebar (5/12) -->
                <div class="lg:col-span-5 space-y-5 lg:sticky lg:top-6">
                    <!-- 1. Identity & Pricing Module -->
                    <div class="p-6 border border-theme-light rounded-2xl bg-theme-alt shadow-theme-md space-y-4">
                        <div class="space-y-1">
                            <NuxtLink v-if="product.brand?.name" :to="`/brand/${product.brand.slug}`" class="text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:underline">
                                {{ product.brand.name }}
                            </NuxtLink>
                            <h1 class="text-xl lg:text-2xl font-bold text-theme leading-snug tracking-tight">
                                {{ product.name }}
                            </h1>
                        </div>

                        <div class="flex items-center gap-4 text-xs py-1">
                            <div class="flex text-amber-500">
                                <svg v-for="i in 5" :key="i" class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            </div>
                            <span class="text-theme-muted font-medium">1,248 reviews</span>
                        </div>

                        <div class="flex items-baseline gap-4">
                            <div class="flex items-baseline text-theme">
                                <span class="text-lg font-bold mr-0.5">৳</span>
                                <span class="text-3xl font-black tracking-tight">{{ Math.round(currentPrice).toLocaleString() }}</span>
                                <span v-if="currentPrice % 1 !== 0" class="text-lg font-bold ml-0.5 text-theme-muted">.{{ currentPrice.toFixed(2).split('.')[1] }}</span>
                            </div>
                            <div v-if="product.compareAtPrice && Number(product.compareAtPrice) > currentPrice" class="flex flex-col">
                                <span class="text-xs text-theme-muted line-through opacity-50">৳{{ Number(product.compareAtPrice).toLocaleString() }}</span>
                                <span class="text-[10px] font-bold text-error px-1 py-0.5 bg-error/10 rounded uppercase tracking-wider">Save {{ discountPercentage }}%</span>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <div class="flex items-center gap-2">
                                <span :class="isOutOfStock ? 'bg-error' : 'bg-success'" class="w-2.5 h-2.5 rounded-full animate-pulse"></span>
                                <span :class="isOutOfStock ? 'text-error' : 'text-success'" class="text-sm font-black uppercase tracking-widest">
                                    {{ isOutOfStock ? 'Currently Unavailable' : 'In Stock & Ready to Ship' }}
                                </span>
                            </div>
                            <p v-if="!isOutOfStock" class="text-[11px] text-theme-muted font-medium uppercase tracking-wider pl-4">
                                Fast Delivery available by next Wednesday
                            </p>
                        </div>
                    </div>

                    <!-- 2. Configuration Module (Variants) -->
                    <div v-if="attributes.length > 0" class="p-6 border border-theme-light rounded-2xl bg-theme-alt shadow-theme-md space-y-6">
                        <div v-for="attr in attributes" :key="attr.name" class="space-y-3">
                            <div class="flex justify-between items-center">
                                <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-theme-muted">Select {{ attr.name }}</h3>
                                <span class="text-xs font-bold text-primary">{{ selectedOptions[attr.name] }}</span>
                            </div>
                            <div class="flex flex-wrap gap-2">
                                <button v-for="val in attr.values" :key="val"
                                    @click="selectOption(attr.name, val)"
                                    class="group px-4 py-2 text-[11px] font-bold uppercase tracking-widest border transition-all rounded-lg active:scale-95 bg-theme shadow-sm relative overflow-hidden"
                                    :class="selectedOptions[attr.name] === val ? 'border-primary ring-1 ring-primary/20 text-theme' : 'border-theme-light hover:border-theme text-theme-muted hover:text-theme'">
                                    <div v-if="selectedOptions[attr.name] === val" class="absolute top-0 right-0 w-1.5 h-1.5 bg-primary"></div>
                                    {{ val }}
                                </button>
                            </div>
                        </div>

                        <!-- Quantity Selector -->
                        <div v-if="!isOutOfStock" class="space-y-3 pt-4 border-t border-theme-light/30">
                            <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-theme-muted">Quantity</h3>
                            <div class="flex items-center bg-theme rounded-lg p-1 border border-theme-light max-w-[120px]">
                                <button @click="quantity > 1 ? quantity-- : null"
                                    class="w-8 h-8 flex items-center justify-center text-lg font-medium hover:bg-theme-alt rounded-md transition-all"
                                    :disabled="quantity <= 1">-</button>
                                <span class="text-xs font-bold w-10 text-center">{{ quantity }}</span>
                                <button @click="quantity < currentStock ? quantity++ : null"
                                    class="w-8 h-8 flex items-center justify-center text-lg font-medium hover:bg-theme-alt rounded-md transition-all"
                                    :disabled="quantity >= currentStock">+</button>
                            </div>
                        </div>
                    </div>

                    <!-- 3. Commitment Actions (CTA) -->
                    <div class="space-y-4">
                        <div class="grid grid-cols-2 gap-3">
                            <button @click="addToCart" :disabled="isPreview || isOutOfStock || isCheckingStock"
                                class="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black h-14 rounded-xl text-xs font-black uppercase tracking-widest transition-all active:scale-[0.98] shadow-md disabled:opacity-30">
                                {{ ctaLabel }}
                            </button>
                            <button @click="orderNow" :disabled="isPreview || isOutOfStock || isCheckingStock"
                                class="w-full bg-primary text-primary-content h-14 rounded-xl text-xs font-black uppercase tracking-widest transition-all active:scale-[0.98] shadow-md hover:opacity-90 disabled:opacity-30">
                                {{ isOutOfStock ? 'Unavailable' : 'Order Now' }}
                            </button>
                        </div>

                        <button @click="orderViaWhatsApp" :disabled="isPreview || isOutOfStock || isCheckingStock"
                            class="w-full bg-[#25D366] text-white h-14 rounded-xl text-xs font-black uppercase tracking-widest transition-all active:scale-[0.98] shadow-md hover:bg-[#128C7E] flex items-center justify-center gap-3">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.6-30.6-38.1-3.2-5.6-.3-8.6 2.5-11.4 2.4-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.8-5.6 5.5-9.3 1.7-3.7 .8-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                            Order via WhatsApp
                        </button>
                        
                        <div class="grid grid-cols-2 gap-4">
                            <button class="flex items-center justify-center gap-3 px-6 h-14 border border-theme-light rounded-xl hover:bg-theme-alt transition-all text-xs font-bold uppercase tracking-widest active:scale-95 group">
                                <svg class="w-4 h-4 text-theme-muted group-hover:text-error transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                Save for Later
                            </button>
                            <button class="flex items-center justify-center gap-3 px-6 h-14 border border-theme-light rounded-xl hover:bg-theme-alt transition-all text-xs font-bold uppercase tracking-widest active:scale-95">
                                <svg class="w-4 h-4 text-theme-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
                                Share
                            </button>
                        </div>
                    </div>

                    <!-- 4. Feature Highlights (Boxed) -->
                    <div v-if="product.short_description" class="p-6 border border-theme-light rounded-2xl bg-theme-alt shadow-theme-sm space-y-4">
                        <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-theme-muted">Core Features</h3>
                        <ul class="space-y-3 text-[13px] text-theme-muted font-medium leading-relaxed">
                            <li v-for="(feature, idx) in product.short_description.split('.').filter(f => f.trim())" :key="idx" class="flex gap-3">
                                <span class="flex-shrink-0 w-4 h-4 mt-0.5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                    <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                                </span>
                                {{ feature.trim() }}.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Bottom Content: In-Depth Specifications (Architectural Grid) -->
            <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10 border-t border-theme-light">
                <div class="p-8 border border-theme-light rounded-2xl bg-theme-alt shadow-theme-md">
                    <h2 class="text-xl font-bold mb-6 text-theme flex items-center gap-3">
                        <span class="w-1 h-6 bg-primary rounded-full"></span>
                        Product Narrative
                    </h2>
                    <div class="prose prose-theme max-w-none text-[15px] text-theme-muted leading-relaxed font-medium"
                        v-html="product.description || 'No description available.'"></div>
                </div>
                
                <div class="p-8 border border-theme-light rounded-2xl bg-theme-alt shadow-theme-md">
                    <h2 class="text-xl font-bold mb-6 text-theme flex items-center gap-3">
                        <span class="w-1 h-6 bg-primary rounded-full"></span>
                        Technical Specifications
                    </h2>
                    <div class="space-y-2">
                        <div v-for="(val, key) in (product.specifications || { 'Brand': product.brand?.name || 'N/A', 'Category': product.category?.name || 'StoreZet Marketplace', 'ID': product.id })" :key="key"
                            class="flex items-center justify-between border-b border-theme-light/40 py-4 text-sm last:border-0 hover:bg-primary/5 px-4 transition-all rounded-xl group cursor-default">
                            <span class="font-bold text-theme-muted group-hover:text-primary transition-colors uppercase tracking-widest text-[11px]">{{ key }}</span>
                            <span class="font-black text-theme text-right">{{ val }}</span>
                        </div>
                    </div>
                </div>
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
        console.error('Failed to fetch product:', e)
        throw createError({ statusCode: 404, statusMessage: 'Product Not Found', fatal: true })
    }
})

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

// Zoom Logic
const zoomStyle = ref({ transform: 'scale(1)', transformOrigin: 'center' })
const handleZoom = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    zoomStyle.value = {
        transform: 'scale(1.8)',
        transformOrigin: `${x}% ${y}%`
    }
}
const resetZoom = () => {
    zoomStyle.value = { transform: 'scale(1)', transformOrigin: 'center' }
}
const toggleFullscreen = () => {
    console.log('Toggle Fullscreen Architecture')
}

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
        variant.values.forEach(val => {
            const attrName = val.attribute?.name
            if (attrName) {
                if (!map.has(attrName)) map.set(attrName, new Set())
                map.get(attrName).add(val.value)
            }
        })
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
        iv.values.forEach(val => {
            if (val.attribute?.name) io[val.attribute.name] = val.value
        })
        selectedOptions.value = io
    }
}, { immediate: true })

const currentVariant = computed(() => {
    if (!product.value?.variants?.length) return null
    return product.value.variants.find(v => {
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

const addToCart = () => {
    if (isPreview.value || isCheckingStock.value || isOutOfStock.value) return
    console.log('Cart Action:', { id: product.value.id, vId: currentVariant.value?.id, qty: quantity.value })
}

const orderNow = () => {
    if (isPreview.value || isCheckingStock.value || isOutOfStock.value) return
    console.log('Order Now Action:', { id: product.value.id, vId: currentVariant.value?.id, qty: quantity.value })
    addToCart() // For demonstration, both act as add to cart
}

const orderViaWhatsApp = () => {
    if (isPreview.value || isCheckingStock.value || isOutOfStock.value) return
    const phone = "8801700000000" // Store placeholder
    const variantStr = Object.entries(selectedOptions.value).map(([k, v]) => `${k}: ${v}`).join(', ')
    const message = `Hi, I want to order:\n*${product.value.name}*\n${variantStr ? `Options: ${variantStr}\n` : ''}Quantity: ${quantity.value}\nPrice: ৳${Math.round(currentPrice.value).toLocaleString()}\nLink: ${window.location.href}`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
}

const ctaLabel = computed(() => {
    if (isCheckingStock.value) return 'Syncing...'
    if (isOutOfStock.value) return 'Out of Stock'
    return 'Add to Cart'
})

const isOutOfStock = computed(() => !isCheckingStock.value && (currentStock.value <= 0 || product.value?.status === 'OUT_OF_STOCK'))

useHead({
    title: computed(() => `${product.value?.name || 'Product'} | StoreZet Premium`),
    meta: [{ name: 'description', content: computed(() => product.value?.shortDescription || '') }]
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
    animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.prose :where(p):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
}

/* Premium Primary Color Overrides */
.bg-primary { background-color: var(--primary); }
.text-primary { color: var(--primary); }
.border-primary { border-color: var(--primary); }
</style>
