<script setup>
    import { ref, onMounted } from 'vue';
    import { useRouter, useRoute } from 'vue-router';

    // Import mock data functions
    import { fetchCategories, fetchPosts } from '../mock/data';

    const router = useRouter();
    const route = useRoute();

    // Data
    const categories = ref([]);
    const posts = ref([]);
    const selectedCategory = ref('');
    const loading = ref(true);

    // Fetch data
    const loadData = async () => {
        loading.value = true;
        try {
            // Get selected category from query params
            selectedCategory.value = route.query.category || '';

            // Fetch categories and all posts
            const [categoriesData, allPosts] = await Promise.all([
                fetchCategories(),
                fetchPosts(),
            ]);

            categories.value = categoriesData;

            // Filter posts by selected category
            if (selectedCategory.value) {
                posts.value = allPosts.filter((post) =>
                    post.tags.includes(selectedCategory.value)
                );
            } else {
                posts.value = allPosts;
            }
        } catch (error) {
            console.error('Failed to fetch data:', error);
        } finally {
            loading.value = false;
        }
    };

    // Handle category click
    const handleCategoryClick = (category) => {
        router.push(`/categories?category=${category}`);
    };

    // Handle post click
    const handlePostClick = (id) => {
        router.push(`/post/${id}`);
    };

    // Handle tag click
    const handleTagClick = (tag) => {
        router.push(`/tag/${tag}`);
    };

    // Load data on mount and when route changes
    onMounted(() => {
        loadData();
    });

    // Watch for route changes
    import { watch } from 'vue';

    watch(
        () => route.query.category,
        () => {
            loadData();
        }
    );
</script>

<template>
    <div class="min-h-screen bg-gray-50 py-12">
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Categories List -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-lg shadow-sm p-6">
                        <h2 class="text-xl font-semibold text-secondary mb-4">
                            分类列表
                        </h2>
                        <ul class="space-y-2">
                            <li>
                                <a
                                    href="/categories"
                                    class="block px-4 py-2 rounded-md transition-colors"
                                    :class="
                                        selectedCategory === ''
                                            ? 'bg-blue-50 text-primary'
                                            : 'text-gray-600 hover:bg-gray-50'
                                    "
                                >
                                    全部文章
                                </a>
                            </li>
                            <li
                                v-for="category in categories"
                                :key="category.name"
                            >
                                <a
                                    href="#"
                                    class="block px-4 py-2 rounded-md transition-colors"
                                    :class="
                                        selectedCategory === category.name
                                            ? 'bg-blue-50 text-primary'
                                            : 'text-gray-600 hover:bg-gray-50'
                                    "
                                    @click.prevent="
                                        handleCategoryClick(category.name)
                                    "
                                >
                                    {{ category.name }}
                                    <span
                                        class="float-right bg-gray-100 text-primary text-xs px-2 py-0.5 rounded"
                                    >
                                        {{ category.count }}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Posts List -->
                <div class="lg:col-span-2">
                    <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
                        <h2 class="text-xl font-semibold text-secondary mb-2">
                            {{
                                selectedCategory ? selectedCategory : '全部文章'
                            }}
                        </h2>
                        <p class="text-gray-600">
                            共 {{ posts.length }} 篇文章
                        </p>
                    </div>

                    <!-- Loading state -->
                    <div
                        v-if="loading"
                        class="flex justify-center items-center h-64 bg-white rounded-lg shadow-sm"
                    >
                        <div class="text-gray-500">加载中...</div>
                    </div>

                    <!-- No posts state -->
                    <div
                        v-else-if="posts.length === 0"
                        class="flex justify-center items-center h-64 bg-white rounded-lg shadow-sm"
                    >
                        <div class="text-gray-500">暂无文章</div>
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
                                    发布于: {{ post.date }}
                                    <span class="ml-2">更新于: {{ post.updatedAt }}</span>
                                </div>
                                <h3
                                    class="text-xl font-semibold text-secondary mb-3"
                                >
                                    {{ post.title }}
                                </h3>
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
            </div>
        </main>
    </div>
</template>

<style scoped>
/* Additional component-specific styles can be added here */
</style>
