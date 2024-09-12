<script setup>

import { ref, onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { useToast } from 'vue-toastification';
import NotFoundView from './NotFoundView.vue';
import Hero from '@/components/Hero.vue';

const toast = useToast();

const route = useRoute();
const router = useRouter();

const jobID = route.params.id

const job = ref({});

const notFound = ref(false);

onMounted(async() => {
    try{
        const res = await axios.get(`http://localhost:8000/jobs/${jobID}`)
        if(res.data){
            job.value = res.data
        }else{
            notFound.value = true
        }
    }catch(err){
        notFound.value = true
    }
})


</script>


<template>

    <div v-if="!notFound" class="job_details">
        <Hero :title="job.title" :subTitle="job.location"/>
        <div class="container py-20">
            <div class="grid grid-cols-12 gap-5">
                <div class="col-span-12 md:col-span-8">
                    <span class="bg-green-600 text-white px-2 rounded-full inline-block mb-2">{{ job.type }}</span>
                    <h2 class="text-2xl font-bold mb-5">{{ job.title }}</h2>
                    <span class="mr-5">Salary: {{job.salary }}</span> 
                    <span>Location: {{job.location }}</span>
                    <p class="text-gray-500 mt-5">{{job.description }}</p>
                </div>

                <div class="col-span-12 md:col-span-4">
                    <div class="company_details">
                        <!-- <h2 class="text-2xl font-bold mb-5">Company Details</h2>
                        <p class="text-gray-500 mt-5">{{job.company.name }}</p>
                        <p class="text-gray-500 mt-5">{{job.company.description }}</p>
                        <p class="text-gray-500 mt-5">{{job.company.contactEmail }}</p>
                        <p class="text-gray-500 mt-5">{{job.company.contactPhone }}</p> -->
                    </div>
                </div>
                    
            </div>
        </div>
    </div>

    <NotFoundView v-else />
</template>