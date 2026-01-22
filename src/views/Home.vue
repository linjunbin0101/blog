<script setup>
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';

    // Import mock data functions
    import {
        fetchPosts,
        fetchCategories,
        fetchRecentPosts,
        allTags,
    } from '../mock/data';

    const router = useRouter();

    // Data
    const posts = ref([]);
    const categories = ref([]);
    const recentPosts = ref([]);
    const loading = ref(true);

    // Fetch data
    const loadData = async () => {
        loading.value = true;
        try {
            // Fetch data in parallel
            const [postsData, categoriesData, recentPostsData] = await Promise.all([
                fetchPosts(),
                fetchCategories(),
                fetchRecentPosts(),
            ]);

            posts.value = postsData;
            categories.value = categoriesData;
            recentPosts.value = recentPostsData;
        } catch (error) {
            console.error('Failed to fetch data:', error);
        } finally {
            loading.value = false;
        }
    };

    // Handle post click
    const handlePostClick = (id) => {
        router.push(`/post/${id}`);
    };

    // Handle category click
    const handleCategoryClick = (category) => {
        router.push(`/categories?category=${category}`);
    };

    // Handle tag click
    const handleTagClick = (tag) => {
        router.push(`/tag/${tag}`);
    };

    // Load data on mount
    onMounted(() => {
        loadData();
    });
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Main Content -->
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Blog Posts (Left Column) -->
                <div class="lg:col-span-2">
                    <!-- Loading state -->
                    <div
                        v-if="loading"
                        class="flex justify-center items-center h-64"
                    >
                        <div class="text-gray-500">加载中...</div>
                    </div>

                    <!-- Posts list -->
                    <div v-else class="space-y-6">
                        <!-- Post Cards -->
                        <article
                            v-for="post in posts"
                            :key="post.id"
                            class="post-card cursor-pointer"
                            @click="handlePostClick(post.id)"
                        >
                            <div class="mb-4">
                                <div class="text-sm text-gray-500 mb-2">
                                    {{ post.date }}
                                </div>
                                <h2
                                    class="text-2xl font-semibold text-secondary mb-3"
                                >
                                    {{ post.title }}
                                </h2>
                                <p class="text-gray-600 leading-relaxed mb-6">
                                    {{ post.excerpt }}
                                </p>
                            </div>

                            <!-- Post Meta -->
                            <div
                                class="flex justify-between items-center pt-4 border-t border-gray-100"
                            >
                                <!-- Tags -->
                                <div class="flex flex-wrap gap-2">
                                    <span
                                        v-for="tag in post.tags"
                                        :key="tag"
                                        class="tag cursor-pointer"
                                        @click.stop="handleTagClick(tag)"
                                    >
                                        {{ tag }}
                                    </span>
                                </div>

                                <!-- Read More Button -->
                                <span class="text-primary font-medium"
                                >阅读全文 →</span
                                >
                            </div>
                        </article>
                    </div>
                </div>

                <!-- Sidebar (Right Column) -->
                <aside class="space-y-6">
                    <!-- About Widget -->
                    <div class="widget">
                        <h3
                            class="text-lg font-semibold text-secondary mb-4 pb-2 border-b-2 border-primary"
                        >
                            关于我
                        </h3>
                        <p class="text-gray-600">
                            我是张三，一名热爱前端开发的程序员。专注于现代Web技术，喜欢分享学习经验和技术心得。
                        </p>
                    </div>

                    <!-- Categories Widget -->
                    <div class="widget">
                        <h3
                            class="text-lg font-semibold text-secondary mb-4 pb-2 border-b-2 border-primary"
                        >
                            分类
                        </h3>
                        <ul class="space-y-3">
                            <li
                                v-for="category in categories"
                                :key="category.name"
                            >
                                <a
                                    href="#"
                                    class="flex justify-between items-center text-gray-600 hover:text-primary transition-colors"
                                    @click.prevent="
                                        handleCategoryClick(category.name)
                                    "
                                >
                                    <span>{{ category.name }}</span>
                                    <span
                                        class="bg-gray-100 text-primary text-xs px-2 py-0.5 rounded"
                                    >
                                        {{ category.count }}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Recent Posts Widget -->
                    <div class="widget">
                        <h3
                            class="text-lg font-semibold text-secondary mb-4 pb-2 border-b-2 border-primary"
                        >
                            最新文章
                        </h3>
                        <ul class="space-y-4">
                            <li
                                v-for="post in recentPosts"
                                :key="post.id"
                                class="pb-3 border-b border-gray-100 last:border-b-0 last:pb-0"
                            >
                                <div
                                    class="font-medium mb-1 cursor-pointer"
                                    @click="handlePostClick(post.id)"
                                >
                                    <a
                                        class="text-secondary hover:text-primary transition-colors"
                                    >{{ post.title }}</a
                                    >
                                </div>
                                <div class="text-xs text-gray-500">
                                    {{ post.date }}
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!-- Tags Cloud Widget -->
                    <div class="widget">
                        <h3
                            class="text-lg font-semibold text-secondary mb-4 pb-2 border-b-2 border-primary"
                        >
                            标签云
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="tag in allTags"
                                :key="tag"
                                class="tag cursor-pointer"
                                @click="handleTagClick(tag)"
                            >
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    </div>
</template>

<style scoped>
/* Additional component-specific styles can be added here */
</style>
