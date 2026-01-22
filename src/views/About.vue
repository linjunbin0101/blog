<script setup>
// About component
</script>

<template>
    <div class="min-h-screen bg-gray-50 py-12">
        <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-lg shadow-sm p-8">
                <h1 class="text-3xl font-semibold text-secondary mb-6">
                    关于我
                </h1>

                <div class="flex flex-col md:flex-row gap-8">
                    <!-- Avatar and social links -->
                    <div class="md:w-1/3">
                        <div
                            class="w-40 h-40 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-6xl mx-auto mb-4"
                        >
                            👋
                        </div>

                        <h2 class="text-xl font-semibold text-center mb-2">
                            张三
                        </h2>
                        <p class="text-gray-600 text-center mb-4">
                            前端开发工程师
                        </p>

                        <!-- Social links -->
                        <div class="flex justify-center space-x-4 mb-6">
                            <a
                                href="#"
                                class="text-gray-600 hover:text-primary text-xl transition-colors"
                            >📧</a
                            >
                            <a
                                href="#"
                                class="text-gray-600 hover:text-primary text-xl transition-colors"
                            >🐦</a
                            >
                            <a
                                href="#"
                                class="text-gray-600 hover:text-primary text-xl transition-colors"
                            >📘</a
                            >
                            <a
                                href="#"
                                class="text-gray-600 hover:text-primary text-xl transition-colors"
                            >📷</a
                            >
                        </div>
                    </div>

                    <!-- About content -->
                    <div class="md:w-2/3">
                        <h3 class="text-lg font-semibold text-secondary mb-3">
                            个人简介
                        </h3>
                        <p class="text-gray-600 mb-4">
                            我是一名热爱前端开发的工程师，拥有5年的前端开发经验。专注于现代Web技术，包括Vue、React、TypeScript等。
                        </p>
                        <p class="text-gray-600 mb-4">
                            我喜欢学习新的技术和框架，不断提升自己的技能。同时，我也喜欢分享我的学习经验和技术心得，希望能帮助更多的开发者。
                        </p>
                        <p class="text-gray-600 mb-6">
                            除了编程，我还喜欢阅读、旅行和摄影。我相信，一个优秀的开发者不仅需要技术能力，还需要广泛的知识面和良好的生活态度。
                        </p>

                        <h3 class="text-lg font-semibold text-secondary mb-3">
                            技术栈
                        </h3>
                        <div class="flex flex-wrap gap-2 mb-6">
                            <span class="tag">Vue 3</span>
                            <span class="tag">React</span>
                            <span class="tag">TypeScript</span>
                            <span class="tag">JavaScript</span>
                            <span class="tag">CSS 3</span>
                            <span class="tag">HTML 5</span>
                            <span class="tag">Tailwind CSS</span>
                            <span class="tag">Vite</span>
                            <span class="tag">Webpack</span>
                            <span class="tag">Git</span>
                        </div>

                        <h3 class="text-lg font-semibold text-secondary mb-3">
                            联系方式
                        </h3>
                        <p class="text-gray-600">
                            如果你有任何问题或合作意向，欢迎通过以下方式联系我：
                        </p>
                        <p class="text-gray-600 mt-2">
                            📧
                            <a
                                href="mailto:zhangsan@example.com"
                                class="text-primary hover:underline"
                            >zhangsan@example.com</a
                            >
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
/* Additional component-specific styles can be added here */
</style>
