<script setup>

import { defineProps,ref, computed } from 'vue';

const props = defineProps({
    job: Object
});

const showFullDesc = ref(false);

const toggleDesc = () => {
    showFullDesc.value = !showFullDesc.value
}

const tranketDesc = computed(() => {
    return showFullDesc.value ? props.job.description : props.job.description.substring(0, 100) + '...';
})


</script>

<template>
    <div class="job_item_container">
        <span class="bg-green-600 text-white px-2 rounded-full inline-block mb-2">{{ job.type }}</span>
        <h2 class="text-xl font-semibold mb-3">{{ job.title }}</h2>
        <div class="border-b pb-3 mb-3">
            <p>{{ tranketDesc }}</p>
            <button class="text-green-500" @click="toggleDesc">{{ showFullDesc ? 'Less' : 'More' }}</button>
        </div>
        <p class="text-green-600 font-semibold mt-5">{{ job.salary }}</p>
        <div class="btn_area pt-5">
            <RouterLink :to="`/jobs/${job.id}`" class="pBtn w-fit">View Details<i class="pi pi-arrow-right"></i></RouterLink>
        </div>
    </div>
</template>