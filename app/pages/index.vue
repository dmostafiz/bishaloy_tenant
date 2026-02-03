<template>

    <!-- {{ $tenant?.layoutComponents?.carousel }} -->

    <CustomComponentResolver :name="$tenant?.layoutComponents?.carousel" class="mb-10" />

    <div class="flex flex-col gap-10" v-for="section, i in sections" :key="i">

        <div v-if="section.type == 'titleSection'"
            :style="{ 'background-color': section.bgColor, 'padding': `${section?.padding?.top}px ${section.padding?.bottom}px ${section.padding?.left}px ${section.padding?.right}px` }">
            <div class="container mx-auto px-4">
                <section class="mb-12">
                    <div class="flex justify-between items-center mb-6">
                        <div>
                            <h2 class="text-3xl font-bold text-theme">{{ section.title }}</h2>
                            <p class="text-theme-muted mt-1">{{ section.subTitle }}</p>
                        </div>
                        <button v-if="section.showViewMoreLink" @click="navigateTo(section.viewMoreLinkUrl)"
                            class="text-primary hover:text-accent font-semibold flex items-center gap-2">
                            {{ section.viewMoreLinkText }}
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div v-if="section?.content?.dataViewerType == 'grid'" id="featuredGrid"
                        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        <!-- Products will be inserted here -->
                        <div v-for="(product, i) in products.filter(p =>
                            section.content.products.includes(p.id)
                        )" :key="i">
                            <CustomComponentResolver
                                :name="tenant?.components?.productCard || 'Product/GridCards/DefaultCard'"
                                :product="product" />
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <!-- Hero Section Component -->
        <CustomComponentResolver v-if="section.type == 'hero'" :name="tenant?.components?.hero || 'Hero/DefaultHero'"
            :section="section" />

    </div>



    <!-- <ThemeProductCard :product="{ name: 'This is a product' }" /> -->
</template>

<script setup>
// const tenant = useNuxtApp().$tenant

const tenant = computed(() => {

    const data = useNuxtApp().$tenant

    if (['bishaloy-tenant'].includes(data)) {
        return null
    } else {
        return data
    }
})


const seo = computed(() => getTenantSeo(tenant.value))

useSeoMeta(() => ({
    title: 'Tenant',
    //   description: seo.value.description,
    //   ogTitle: seo.value.ogTitle,
    //   ogDescription: seo.value.ogDescription,
    ogType: 'website',
}))

const products = [
    { id: 1, name: 'Wireless Headphones Pro', category: 'electronics', price: 79.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop', badge: 'Featured', stock: 15 },
    { id: 2, name: 'Smart Watch Series 5', category: 'electronics', price: 199.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', badge: 'Best Seller', stock: 8 },
    { id: 3, name: 'Premium Running Shoes', category: 'sports', price: 89.99, rating: 4.3, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', badge: 'New', stock: 25 },
    { id: 4, name: 'Smart Coffee Maker', category: 'home', price: 45.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop', badge: 'Trending', stock: 12 },
    { id: 5, name: 'Travel Backpack Pro', category: 'fashion', price: 34.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop', badge: 'Featured', stock: 30 },
    { id: 6, name: 'Bluetooth Speaker Mini', category: 'electronics', price: 59.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop', badge: 'Best Seller', stock: 5 },
    { id: 7, name: 'Eco Yoga Mat', category: 'sports', price: 29.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop', badge: 'New', stock: 40 },
    { id: 8, name: 'Modern Desk Lamp', category: 'home', price: 39.99, rating: 4.2, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop', badge: 'Trending', stock: 18 },
    { id: 9, name: 'Designer Sunglasses', category: 'fashion', price: 149.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop', badge: 'Featured', stock: 10 },
    { id: 10, name: 'Kindle Paperwhite', category: 'books', price: 129.99, rating: 4.9, image: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=400&h=400&fit=crop', badge: 'Best Seller', stock: 22 },
    { id: 11, name: 'RGB Gaming Mouse', category: 'electronics', price: 49.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop', badge: 'New', stock: 35 },
    { id: 12, name: 'Stainless Water Bottle', category: 'sports', price: 19.99, rating: 4.3, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop', badge: 'Trending', stock: 50 }
];


const { $axios } = useNuxtApp()

const { data: sections } = useQuery({
    queryKey: ['homePage'],
    queryFn: async () => {
        const res = await $axios.get('/tenant/home-page')

        console.log('home page response: ', res?.data)
        return res?.data?.sections
    }

})

</script>