<script setup>
    import { ref, onMounted, computed } from 'vue';
    import { useRouter } from 'vue-router';
    import { fetchPostById } from '../mock/data';

    const router = useRouter();

    // Props
    const props = defineProps({
        id: {
            type: String,
            required: true,
        },
    });

    // Data
    const post = ref(null);
    const loading = ref(true);

    // Fetch post data
    const loadPost = async () => {
        loading.value = true;
        try {
            const postData = await fetchPostById(props.id);
            post.value = postData;
        } catch (error) {
            console.error('Failed to fetch post:', error);
        } finally {
            loading.value = false;
        }
    };

    // Handle back click
    const handleBackClick = () => {
        router.back();
    };

    // Handle tag click
    const handleTagClick = (tag) => {
        router.push(`/tag/${tag}`);
    };

    // Convert Markdown to HTML
    const postContent = computed(() => {
        if (!post.value) return '';

        let content = post.value.content;

        // Convert headings
        content = content.replace(
            /^# (.*$)/gm,
            '<h1 class="text-2xl font-semibold mb-4">$1</h1>'
        );
        content = content.replace(
            /^## (.*$)/gm,
            '<h2 class="text-xl font-semibold mt-6 mb-3">$1</h2>'
        );
        content = content.replace(
            /^### (.*$)/gm,
            '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>'
        );

        // Convert list items
        content = content.replace(/^- (.*$)/gm, '<li class="ml-6 mb-1">$1</li>');

        // Convert links
        content = content.replace(
            /(https?:\/\/[^\s]+)/g,
            '<a href="$1" target="_blank" class="text-primary hover:underline">$1</a>'
        );

        // Convert code blocks
        content = content.replace(
            /`([^`]+)`/g,
            '<code class="bg-gray-100 px-2 py-0.5 rounded">$1</code>'
        );
        content = content.replace(
            /```([\s\S]*?)```/g,
            '<pre class="bg-gray-100 p-4 rounded-md overflow-x-auto my-4"><code>$1</code></pre>'
        );

        // Convert paragraphs and line breaks
        content = content.replace(/\n\n/g, '</p><p class="mb-4">');
        content = content.replace(/\n/g, '<br>');

        // Add opening paragraph tag if needed
        if (!content.startsWith('<p')) {
            content = '<p class="mb-4">' + content;
        }

        // Add closing paragraph tag if needed
        if (!content.endsWith('</p>')) {
            content += '</p>';
        }

        return content;
    });

    // Load post on mount
    onMounted(() => {
        loadPost();
    });
</script>

<template>
    <div class="min-h-screen bg-gray-50 py-12">
        <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Loading state -->
            <div
                v-if="loading"
                class="flex justify-center items-center h-64 bg-white rounded-lg shadow-sm"
            >
                <div class="text-gray-500">加载中...</div>
            </div>

            <!-- Post not found state -->
            <div
                v-else-if="!post"
                class="bg-white rounded-lg shadow-sm p-8 text-center"
            >
                <h1 class="text-2xl font-semibold text-secondary mb-4">
                    文章未找到
                </h1>
                <p class="text-gray-600 mb-6">
                    抱歉，您请求的文章不存在或已被删除。
                </p>
                <button class="btn" @click="handleBackClick">返回首页</button>
            </div>

            <!-- Post content -->
            <article v-else class="bg-white rounded-lg shadow-sm p-8">
                <!-- Post header -->
                <div class="mb-8">
                    <button
                        class="text-primary hover:underline mb-4 inline-block"
                        @click="handleBackClick"
                    >
                        ← 返回列表
                    </button>

                    <div class="text-sm text-gray-500 mb-3">
                        发布于: {{ post.date }}
                        <span class="ml-2">更新于: {{ post.updatedAt }}</span>
                    </div>
                    <h1 class="text-3xl font-semibold text-secondary mb-4">
                        {{ post.title }}
                    </h1>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span
                            v-for="tag in post.tags"
                            :key="tag"
                            class="tag cursor-pointer"
                            @click="handleTagClick(tag)"
                        >
                            {{ tag }}
                        </span>
                    </div>
                </div>

                <!-- Post content -->
                <div class="prose max-w-none">
                    <!-- Convert Markdown content to HTML using computed property -->
                    <div v-html="postContent"></div>
                </div>

                <!-- Post footer -->
                <div class="mt-12 pt-6 border-t border-gray-100">
                    <button class="btn" @click="handleBackClick">
                        返回列表
                    </button>
                </div>
            </article>
        </main>
    </div>
</template>

<style scoped>
/* Additional component-specific styles can be added here */
.prose {
    color: #333;
}

.prose h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--secondary-color);
}

.prose h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--secondary-color);
}

.prose h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    color: var(--secondary-color);
}

.prose p {
    margin-bottom: 1rem;
    line-height: 1.6;
}

.prose ul {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
}

.prose li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
}

.prose a {
    color: var(--primary-color);
    text-decoration: none;
}

.prose a:hover {
    text-decoration: underline;
}

.prose code {
    background-color: #f0f4f8;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-family: monospace;
}

.prose pre {
    background-color: #f0f4f8;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1rem 0;
}

.prose pre code {
    background-color: transparent;
    padding: 0;
}
</style>
