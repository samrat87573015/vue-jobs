<script setup>

import { ref, computed } from 'vue';
import axios from 'axios';
import Hero from '@/components/Hero.vue';
import Joblisting from '@/components/Joblisting.vue';


</script>

<template>
  <main class="home">

    <Hero />

    <Joblisting :limit="2" :show-btn="true"/>
    
  </main>
</template>


