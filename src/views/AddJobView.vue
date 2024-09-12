<script setup>

import { ref, reactive } from 'vue';
import { useToast } from 'vue-toastification';



const toast = useToast();


const form = reactive({
    title: '',
    type: 'Full-Time',
    description: ''
});


const addJob = () => {

    const newJob = {
        title: form.title,
        type: form.type,
        description: form.description
    }

    toast.success('Job Added print in console')
    console.log(newJob)

}

</script>

<template>
    <div class="container py-10">
        <form @submit.prevent="addJob()">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" v-model="form.title">
            </div>
            <div class="form-control">
                <label for="type">Type</label>
                <select name="type" id="type" v-model="form.type">
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                </select>
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="10" v-model="form.description"></textarea>
            </div>

            <input class="cursor-pointer pBtn" type="submit" value="Submit">
        </form>
    </div>
</template>

<style scoped>
.form-control input, .form-control select, .form-control textarea {
    width: 100%;
    border: 1px solid #ccc;
    padding: 5px;
    margin-bottom: 10px;
}
</style>