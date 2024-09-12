<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        title: {
            type: String,
            default: 'Find your dream job'
        },
        subTitle: {
            type: String,
            default: 'Find your dream job with us and get a job.'
        }
    });


</script>

<template>
    <div class="hero bg-[#41b883] py-28">
        <div class="container">
            <div class="hero_content space-y-3 text-center">
                <h1 class="hero_title text-2xl font-bold text-white">{{ props.title }}</h1>
                <p class="hero_text text-white">{{ props.subTitle }}</p>
            </div>
        </div>
    </div>
</template>