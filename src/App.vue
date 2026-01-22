<script setup>
// App component with router layout
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <!-- Header -->
        <header
            class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"
        >
            <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16 items-center">
                    <!-- Logo -->
                    <router-link
                        to="/"
                        class="text-2xl font-semibold text-primary"
                    >Blog</router-link
                    >

                    <!-- Navigation links -->
                    <div class="md:flex space-x-8">
                        <router-link
                            to="/"
                            class="text-gray-600 hover:text-primary font-medium transition-colors"
                        >首页</router-link
                        >
                        <router-link
                            to="/categories"
                            class="text-gray-600 hover:text-primary font-medium transition-colors"
                        >文章</router-link
                        >
                        <router-link
                            to="/about"
                            class="text-gray-600 hover:text-primary font-medium transition-colors"
                        >关于</router-link
                        >
                    </div>
                </div>
            </nav>
        </header>

        <!-- Router View -->
        <router-view class="flex-grow"></router-view>

        <!-- Footer -->
        <footer class="bg-secondary text-white py-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Footer Links -->
                <div class="flex justify-center space-x-8 mb-4">
                    <router-link
                        to="/"
                        class="text-gray-300 hover:text-white transition-colors"
                    >首页</router-link
                    >
                    <router-link
                        to="/categories"
                        class="text-gray-300 hover:text-white transition-colors"
                    >文章</router-link
                    >
                    <router-link
                        to="/about"
                        class="text-gray-300 hover:text-white transition-colors"
                    >关于</router-link
                    >
                    <a
                        href="#"
                        class="text-gray-300 hover:text-white transition-colors"
                    >联系我</a
                    >
                </div>

                <!-- Copyright -->
                <div class="text-center text-gray-400 text-sm">
                    &copy; 2026 张三的个人博客. 保留所有权利. v1.0.0
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
/* Additional component-specific styles can be added here */
</style>
