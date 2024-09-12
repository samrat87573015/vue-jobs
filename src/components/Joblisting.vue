<script setup>

import { ref,defineProps, onMounted } from 'vue';
import axios from 'axios';


import JobCard from './JobCard.vue';


const jobs = ref([]);

defineProps({
    limit: Number,
    showBtn:{
        type: Boolean,
        default: false
    }
})


onMounted(async() => {
    try{
        const res = await axios.get('http://localhost:8000/jobs')
        jobs.value = res.data

    }catch(err){
        console.log(err)
    }
})








</script>

<template>
    <div class="Joblisting py-10">
        <div class="container">
            <div class="grid grid-cols-2 gap-5">
                <JobCard v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" class="job_item" :job="job" />
            </div>

            <div v-if="showBtn">
                <RouterLink to="/jobs" class="pBtn text-center flex items-center justify-center gap-2 mt-10">View All Jobs <i class="pi pi-arrow-right"></i></RouterLink>
            </div>
        </div>
    </div>
</template>