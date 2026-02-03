<template>
    <div class="min-h-screen bg-white">
        <div class="bg-gray-900 text-white py-12">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl font-bold">Privacy Policy</h1>
                <p class="text-gray-400 mt-2">Last updated: February 1, 2026</p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12 max-w-4xl">
            <div class="prose prose-gray max-w-none">
                <h2>1. Information We Collect</h2>
                <p>We collect information you provide directly to us, such as when you create an account, make a
                    purchase, or contact us for support. This includes your name, email address, phone number, shipping
                    address, and payment information.</p>

                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                    <li>Process and fulfill your orders</li>
                    <li>Send you order confirmations and updates</li>
                    <li>Respond to your comments and questions</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Improve our services and develop new features</li>
                </ul>

                <h2>3. Information Sharing</h2>
                <p>We do not sell your personal information. We may share your information with third parties only to
                    provide our services, comply with the law, or protect our rights.</p>

                <h2>4. Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your personal information
                    against unauthorized access, alteration, or destruction.</p>

                <h2>5. Your Rights</h2>
                <p>You have the right to access, correct, or delete your personal information. You may also opt out of
                    marketing communications at any time.</p>

                <h2>6. Cookies</h2>
                <p>We use cookies to enhance your browsing experience. For more information, please see our <NuxtLink
                        to="/cookies" class="text-orange-500">Cookie Policy</NuxtLink>.</p>

                <h2>7. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us at privacy@store.com.</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
useSeoMeta({ title: 'Privacy Policy' })
</script>
