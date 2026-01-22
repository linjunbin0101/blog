<script setup>
    import { ref, onMounted } from 'vue';
    import { useRouter, useRoute } from 'vue-router';

    // Import mock data functions
    import { fetchPostsByTag, allTags } from '../mock/data';

    const router = useRouter();
    const route = useRoute();

    // Data
    const posts = ref([]);
    const tagName = ref(route.params.name || '');
    const loading = ref(true);

    // Fetch posts by tag
    const loadPosts = async () => {
        loading.value = true;
        try {
            tagName.value = route.params.name || '';
            const postsData = await fetchPostsByTag(tagName.value);
            posts.value = postsData;
        } catch (error) {
            console.error('Failed to fetch posts:', error);
        } finally {
            loading.value = false;
        }
    };

    // Handle post click
    const handlePostClick = (id) => {
        router.push(`/post/${id}`);
    };

    // Handle tag click
    const handleTagClick = (tag) => {
        router.push(`/tag/${tag}`);
    };

    // Load posts on mount
    onMounted(() => {
        loadPosts();
    });

    // Watch for route changes
    import { watch } from 'vue';

    watch(
        () => route.params.name,
        () => {
            loadPosts();
        }
    );
</script>

<template>
    <div class="min-h-screen bg-gray-50 py-12">
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Tags List -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-lg shadow-sm p-6">
                        <h2 class="text-xl font-semibold text-secondary mb-4">
                            所有标签
                        </h2>
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="tag in allTags"
                                :key="tag"
                                class="tag cursor-pointer"
                                :class="
                                    tagName === tag
                                        ? 'bg-primary text-white'
                                        : ''
                                "
                                @click="handleTagClick(tag)"
                            >
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Posts List -->
                <div class="lg:col-span-2">
                    <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
                        <h2 class="text-xl font-semibold text-secondary mb-2">
                            标签：{{ tagName }}
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
                        <div class="text-gray-500">暂无相关文章</div>
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
