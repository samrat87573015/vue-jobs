<script setup>

import { RouterLink, useRoute } from 'vue-router';

const isActive = (path) => {
    return useRoute().path === path
}

</script>

<template>
    <header class="bg-[#41b883] border border-spacing-1 border-green-300">
        <div class="wrapper container flex items-center justify-between">
            <RouterLink to="/" class="logo w-[60px] flex items-center gap-1">
                <img src="@/assets/img/logo/logo.png" alt="logo">
                <h2 class="text-2xl font-bold">Jobs</h2>
            </RouterLink>

            <nav class="flex items-center gap-5 nav">
            <RouterLink to="/" :class="isActive('/') ? 'active' : ''" >Home</RouterLink>
            <RouterLink to="/jobs" :class="isActive('/jobs') ? 'active' : ''" >Jobs</RouterLink>
            <RouterLink to="/add-job" :class="isActive('/add-job') ? 'active' : ''" >Add job</RouterLink>
            </nav>
        </div>
    </header>
</template>