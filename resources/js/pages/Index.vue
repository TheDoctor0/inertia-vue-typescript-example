<template>
  <h1 class="text-2xl font-semibold mb-3">Hello world!</h1>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Layout from '@/layouts/Default.vue';

@Component({ layout: Layout })
export default class Index extends Vue {}
</script>
